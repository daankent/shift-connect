package com.shiftconnect.backend.accounts.presentation

import com.shiftconnect.backend.accounts.application.AccountService
import com.shiftconnect.backend.accounts.application.dto.AccountMeResponseDTO
import com.shiftconnect.backend.config.ApiError
import com.shiftconnect.backend.config.auth.RoleExpressions
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.ExampleObject
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.tags.Tag
import io.swagger.v3.oas.annotations.responses.ApiResponse
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/accounts")
@Tag(name = "Accounts", description = "Operations related to accounts")
class AccountController(private val accountService: AccountService) {
    @GetMapping("/me")
    @Operation(
        summary = "Get the authenticated user's account information.",
        description = "Returns the account information of the currently authenticated user.",
        responses = [
            ApiResponse(
                responseCode = "200",
                description = "Successfully retrieved account information",
                content = [Content(
                    mediaType = "application/json",
                    schema = Schema(implementation = AccountMeResponseDTO::class)
                )]
            ),
            ApiResponse(
                responseCode = "401",
                description = "Unauthorized: user is not authenticated",
                content = [Content()]
            ),
            ApiResponse(
                responseCode = "404",
                description = "Account not found for the authenticated user",
                content = [Content(
                    mediaType = "application/json",
                    schema = Schema(implementation = ApiError::class),
                    examples = [ExampleObject(
                        value = """
                            {
                                "code": "ACCOUNT_NOT_FOUND",
                                "message": "Account not found"
                            }
                        """
                    )]
                )]
            )
        ]
    )
    @PreAuthorize(RoleExpressions.MANAGER_OR_EMPLOYEE)
    fun getMe(): AccountMeResponseDTO {
        val account = accountService.getMe()

        return AccountMeResponseDTO(
            id = account.id.toString(),
            email = account.email,
            firstName = account.firstName,
            lastName = account.lastName,
            role = account.role.name,
            storeNumber = account.store.storeNumber
        )
    }
}
