export interface WalletInfo
{
    walletname: String
    walletversion: Number
    format: String 
    balance: Number
    unconfirmed_balance: Number
    immature_balance: Number
    txcount: Number
    keypoololdest: Number
    keypoolsize: Number
    hdseedid: String
    keypoolsize_hd_internal: Number
    paytxfee: Number
    private_keys_enabled: boolean
    avoid_reuse: boolean
    scanning: boolean
    descriptors: boolean
}