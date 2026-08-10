package com.shiftconnect.backend.accounts.application

import com.shiftconnect.backend.accounts.data.AccountRepository
import com.shiftconnect.backend.accounts.exceptions.AccountNotFoundException
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class AccountUserDetailsService(
    private val accountRepository: AccountRepository
) : UserDetailsService {
    override fun loadUserByUsername(email: String): UserDetails {
        val account = accountRepository.findByEmail(email)
            ?: throw AccountNotFoundException(email)

        return User.withUsername(account.email)
            .password(account.password)
            .authorities("ROLE_${account.role}")
            .build()
    }
}