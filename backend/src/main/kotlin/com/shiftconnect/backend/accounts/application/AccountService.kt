package com.shiftconnect.backend.accounts.application

import com.shiftconnect.backend.accounts.application.dto.AccountCreationRequestDTO
import com.shiftconnect.backend.accounts.application.dto.AccountMeResponseDTO
import com.shiftconnect.backend.accounts.data.AccountRepository
import com.shiftconnect.backend.accounts.domain.Account
import com.shiftconnect.backend.accounts.exceptions.AccountCreationException
import com.shiftconnect.backend.accounts.exceptions.AccountNotFoundException
import com.shiftconnect.backend.stores.application.StoreService
import jakarta.transaction.Transactional
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.stereotype.Service

@Service
class AccountService(
    private val passwordEncoder: PasswordEncoder,
    private val accountRepository: AccountRepository,
    private val storeService: StoreService
) {
    @Transactional
    fun createAccount(request: AccountCreationRequestDTO): AccountMeResponseDTO {
        if (accountRepository.existsByEmail(request.email)) {
            throw AccountCreationException("Account with email ${request.email} already exists")
        }

        if (request.password != request.repeatPassword) {
            throw AccountCreationException("Passwords do not match")
        }

        val account = Account(
            firstName = request.firstName,
            lastName = request.lastName,
            email = request.email,
            password = passwordEncoder.encode(request.password)
                ?: throw AccountCreationException("Password encoding failed"),
            role = request.role,
            store = storeService.getStoreByStoreNumber(request.storeNumber)
                ?: throw AccountCreationException("Store with number ${request.storeNumber} does not exist"),
        )

        val saved = accountRepository.save(account)

        return AccountMeResponseDTO(
            id = saved.id.toString(),
            email = saved.email,
            firstName = saved.firstName,
            lastName = saved.lastName,
            role = saved.role.name,
            storeNumber = saved.store.storeNumber
        )
    }

    fun getAccountByEmail(email: String): Account? {
        return accountRepository.findByEmail(email)
    }

    fun getMe(): Account {
        val authentication = SecurityContextHolder.getContext().authentication ?: throw AccountNotFoundException()
        val jwt = authentication.principal as Jwt

        println(jwt.getClaimAsString("roles"))

        val email = jwt.getClaimAsString("email") ?: throw AccountNotFoundException();

        return getAccountByEmail(email) ?: throw AccountNotFoundException()
    }
}