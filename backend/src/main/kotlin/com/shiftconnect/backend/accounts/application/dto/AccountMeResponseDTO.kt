package com.shiftconnect.backend.accounts.application.dto

import com.shiftconnect.backend.accounts.domain.AccountRole

data class AccountMeResponseDTO(
    val id: String,
    val email: String,
    val firstName: String,
    val lastName: String,
    val role: AccountRole,
    val storeNumber: String,
)
