package com.shiftconnect.backend.accounts.application.dto

data class AccountMeResponseDTO(
    val id: String,
    val email: String,
    val firstName: String,
    val lastName: String,
    val role: String,
    val storeNumber: String,
)
