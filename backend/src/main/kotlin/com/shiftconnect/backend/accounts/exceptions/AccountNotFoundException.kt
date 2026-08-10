package com.shiftconnect.backend.accounts.exceptions

class AccountNotFoundException(email: String? = null): Exception(if (email == null) "Account not found" else "Account with email $email could not be found") {
}