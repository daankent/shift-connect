package com.shiftconnect.backend.config

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
    val messages: List<String>
)


@RestControllerAdvice
class ExceptionHandler {

    @ExceptionHandler(StoreNotFoundException::class)
    fun handleGameAlreadyStarted(
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

    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun handleValidationException(
        ex: MethodArgumentNotValidException
    ): ResponseEntity<ValidationError> {
        val messages = ex.bindingResult.fieldErrors.map {
            "${it.field}: ${it.defaultMessage}"
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