package com.shiftconnect.backend.dataseeders


import com.shiftconnect.backend.accounts.application.AccountService
import com.shiftconnect.backend.accounts.application.dto.AccountCreationRequestDTO
import com.shiftconnect.backend.accounts.domain.AccountRole
import com.shiftconnect.backend.stores.data.StoreRepository
import com.shiftconnect.backend.stores.domain.Store
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.stereotype.Component


@Component
class StoreDataSeeder(
    private val storeRepository: StoreRepository,
    private val accountService: AccountService
) : ApplicationRunner {

    override fun run(args: ApplicationArguments) {
        if (storeRepository.count() > 0) return;

        val store1 = Store(
            storeNumber = "1213",
            address = "De Passage 26, 3641AK, Mijdrecht, Nederland",
            lat = 52.20624264148707.toBigDecimal(),
            lon = 4.866035563816197.toBigDecimal()
        )

        val store2 = Store(
            storeNumber = "1827",
            address = "Leicester 13, 3641LH, Mijdrecht, Nederland",
            lat = 52.21255772331204.toBigDecimal(),
            lon = 4.86253004980801.toBigDecimal()
        )

        val store3 = Store(
            storeNumber = "8659",
            address = "Amstelplein 37, 1421SB, Uithoorn, Nederland",
            lat = 52.23288836267672.toBigDecimal(),
            lon = 4.828877007582576.toBigDecimal()
        )
        val store4 = Store(
            storeNumber = "8729",
            address = "Herenweg 71 73, 3645DG, Vinkeveen, Nederland",
            lat = 52.21587284163553.toBigDecimal(),
            lon = 4.934875447238173.toBigDecimal()
        )
        val store5 = Store(
            storeNumber = "1504",
            address = "Zijdelwaardplein 84, 1422DN, Uithoorn, Nederland",
            lat = 52.246358530618856.toBigDecimal(),
            lon = 4.826952093167442.toBigDecimal()
        )
        val store6 = Store(
            storeNumber = "1168",
            address = "Westelijk Halfrond 70, 1183JG, Amstelveen, Nederland",
            lat = 52.21255772331204.toBigDecimal(),
            lon = 4.86253004980801.toBigDecimal()
        )
        val store7 = Store(
            storeNumber = "1073",
            address = "Westwijkplein 7, 1187LV, Amstelveen, Nederland",
            lat = 52.31197273181926.toBigDecimal(),
            lon = 4.87513956343894.toBigDecimal()
        )
        val store8 = Store(
            storeNumber = "1080",
            address = "Gelderlandplein 47, 1082KZ, Amsterdam, Nederland",
            lat = 52.331174959471305.toBigDecimal(),
            lon = 4.878477820178186.toBigDecimal()
        )
        val store9 = Store(
            storeNumber = "1329",
            address = "Markt 10, 3621AB, Breukelen, Nederland",
            lat = 52.17122725161922.toBigDecimal(),
            lon = 5.003876711510306.toBigDecimal()
        )
        val store10 = Store(
            storeNumber = "1439",
            address = "Wagenstraat 24, 3441BM, Woerden, Nederland",
            lat = 52.085079259194856.toBigDecimal(),
            lon = 4.88559418108956.toBigDecimal()
        )

        storeRepository.save(store1)
        storeRepository.save(store2)
        storeRepository.save(store3)
        storeRepository.save(store4)
        storeRepository.save(store5)
        storeRepository.save(store6)
        storeRepository.save(store7)
        storeRepository.save(store8)
        storeRepository.save(store9)
        storeRepository.save(store10)

        accountService.createAccount(
            AccountCreationRequestDTO(
                firstName = "Daan",
                lastName = "Kentrop",
                email = "daan.kentrop@supermarkt.nl",
                password = "password",
                repeatPassword = "password",
                role = AccountRole.MANAGER,
                storeNumber = "1213"
            )
        )


    }
}