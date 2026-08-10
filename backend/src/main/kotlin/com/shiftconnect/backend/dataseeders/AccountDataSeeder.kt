package com.shiftconnect.backend.dataseeders
import com.shiftconnect.backend.accounts.application.AccountService
import com.shiftconnect.backend.accounts.application.dto.AccountCreationRequestDTO
import com.shiftconnect.backend.accounts.data.AccountRepository
import com.shiftconnect.backend.accounts.domain.AccountRole
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.stereotype.Component


@Component
class AccountDataSeeder(
    private val accountRepository: AccountRepository,
    private val accountService: AccountService
) : ApplicationRunner {

    override fun run(args: ApplicationArguments) {
        if (accountRepository.count() > 0) return;

        accountService.createAccount(
            AccountCreationRequestDTO(
                firstName = "Daan",
                lastName = "Kentrop",
                email = "daan.kentrop@supermarkt.nl",
                password = "password",
                repeatPassword = "password",
                role = AccountRole.MANAGER,
                storeNumber = "1213"
            )
        )

        accountService.createAccount(
            AccountCreationRequestDTO(
                firstName = "Geert",
                lastName = "Gerrits",
                email = "geert.gerrits@supermarkt.nl",
                password = "password",
                repeatPassword = "password",
                role = AccountRole.EMPLOYEE,
                storeNumber = "1827"
            )
        )


    }
}