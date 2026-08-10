package com.shiftconnect.backend.config.auth

import com.shiftconnect.backend.accounts.domain.RoleNames

object RoleExpressions {
    const val MANAGER_OR_EMPLOYEE = "hasAnyRole('${RoleNames.MANAGER}', '${RoleNames.EMPLOYEE}')"
    const val MANAGER_ONLY = "hasRole('${RoleNames.MANAGER}')"
    const val EMPLOYEE_ONLY = "hasRole('${RoleNames.EMPLOYEE}')"
}