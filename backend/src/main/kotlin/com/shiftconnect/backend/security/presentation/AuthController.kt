package com.shiftconnect.backend.security.presentation

import com.shiftconnect.backend.accounts.application.AccountService
import com.shiftconnect.backend.accounts.exceptions.AccountNotFoundException
import com.shiftconnect.backend.config.ApiError
import com.shiftconnect.backend.config.ValidationError
import com.shiftconnect.backend.security.application.JwtTokenService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.ExampleObject
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.tags.Tag
import jakarta.validation.Valid
import jakarta.validation.constraints.Email
import jakarta.validation.constraints.NotBlank
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class LoginRequest(
    @field:NotBlank
    @field:Email(message = "Email must be valid")
    val email: String?,

    @field:NotBlank
    val password: String?
)

data class TokenResponse(
    val accessToken: String,
)

@RestController
@RequestMapping("/auth")
@Tag(name = "Authentication", description = "Operations related to authentication")
class AuthController(
    private val authenticationManager: AuthenticationManager,
    private val jwtTokenService: JwtTokenService,
    private val accountService: AccountService
) {
    @PostMapping("/login")
    @Operation(
        summary = "Authenticates a user and returns a JWT token.",
        description = "Validates the provided email and password, and returns a JWT token if authentication is successful.",
        responses = [
            ApiResponse(
                responseCode = "200",
                description = "Authentication successful, JWT token returned"
            ),
            ApiResponse(
                responseCode = "401",
                description = "Authentication failed, invalid email or password",
                content = [Content()]
            ),
            ApiResponse(
                responseCode = "404",
                description = "Account not found for the provided email",
                content = [Content(
                    mediaType = "application/json",
                    schema = Schema(implementation = ApiError::class),
                    examples = [ExampleObject(
                        name = "Account not found",
                        summary = "Account not found for the provided email",
                        value = """{
                                  "code": "ACCOUNT_NOT_FOUND",
                                  "message": "Account with email ${'$'}email could not be found"
                                }"""
                    )]
                )]
            ),
            ApiResponse(
                responseCode = "400",
                description = "Invalid request payload",
                content = [Content(
                    mediaType = "application/json",
                    schema = Schema(implementation = ValidationError::class)
                )]
            )
        ]
    )
    fun login(@Valid @RequestBody request: LoginRequest): TokenResponse {
        authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(request.email, request.password)
        )

        val account = accountService.getAccountByEmail(request.email!!)
            ?: throw AccountNotFoundException(request.email ?: "Unknown email")

        return TokenResponse(
            accessToken = jwtTokenService.createAccessToken(account),
        )
    }
}