package com.shiftconnect.backend.accounts.data

import com.shiftconnect.backend.accounts.domain.Account
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface AccountRepository: JpaRepository<Account, UUID> {
    fun findByEmail(email: String): Account?

    fun existsByEmail(email: String): Boolean
}