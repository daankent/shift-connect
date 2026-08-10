package com.shiftconnect.backend.accounts.domain

enum class AccountRole {
    MANAGER, EMPLOYEE
}

object RoleNames {
    const val MANAGER = "MANAGER"
    const val EMPLOYEE = "EMPLOYEE"
}