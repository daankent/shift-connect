package com.shiftconnect.backend.accounts.application.dto

import com.shiftconnect.backend.accounts.domain.AccountRole
import jakarta.validation.constraints.NotBlank
import jakarta.validation.constraints.NotNull
import jakarta.validation.constraints.Pattern

data class AccountCreationRequestDTO(
    @field:NotBlank(message = "Firstname cannot be blank")
    val firstName: String,
    @field:NotBlank(message = "Lastname cannot be blank")
    val lastName: String,
    @field:NotBlank(message = "Email cannot be blank")
    val email: String,
    @field:NotBlank(message = "Password cannot be blank")
    val password: String,
    @field:NotBlank(message = "Repeat password cannot be blank")
    val repeatPassword: String,
    @field:NotNull(message = "Role cannot be null")
    var role: AccountRole,
    @field:Pattern(regexp = "\\d{4}", message = "Store number must be exactly 4 digits")
    val storeNumber: String
)
