package com.shiftconnect.backend.config

import com.shiftconnect.backend.accounts.exceptions.AccountCreationException
import com.shiftconnect.backend.accounts.exceptions.AccountNotFoundException
import com.shiftconnect.backend.stores.exceptions.StoreNotFoundException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

data class ApiError(
    val code: String,
    val message: String
)

data class ValidationError(
    val code: String = "VALIDATION_ERROR",
    val messages: List<ValidationErrorMessage>
)

data class ValidationErrorMessage(
    val field: String,
    val message: String
)


@RestControllerAdvice
class ExceptionHandler {

    @ExceptionHandler(StoreNotFoundException::class)
    fun handleStoreNotFound(
        ex: StoreNotFoundException
    ): ResponseEntity<ApiError> {
        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(
                ApiError(
                    code = "STORE_NOT_FOUND",
                    message = ex.message ?: "Store not found"
                )
            )
    }

    @ExceptionHandler(AccountNotFoundException::class)
    fun handleAccountNotFound(
        ex: AccountNotFoundException
    ): ResponseEntity<ApiError> {
        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(
                ApiError(
                    code = "ACCOUNT_NOT_FOUND",
                    message = ex.message ?: "Account not found"
                )
            )
    }

    @ExceptionHandler(AccountCreationException::class)
    fun handleAccountCreationException(
        ex: AccountCreationException
    ): ResponseEntity<ApiError> {
        return ResponseEntity
            .status(HttpStatus.CONFLICT)
            .body(
                ApiError(
                    code = "ACCOUNT_CREATION_FAILED",
                    message = ex.message ?: "Account creation failed"
                )
            )
    }



    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun handleValidationException(
        ex: MethodArgumentNotValidException
    ): ResponseEntity<ValidationError> {
        val messages = ex.bindingResult.fieldErrors.map {
            ValidationErrorMessage(
                field = it.field,
                message = it.defaultMessage ?: "Invalid value"
            )
        }

        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(
                ValidationError(
                    messages = messages
                )
            )
    }
}