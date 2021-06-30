export interface ValidateAddress{
    isvalid: boolean;
    address: String;
    scriptPubKey: String;
    isScript: boolean;
    iswitness: boolean;
    witness_version: Number;
    witness_program: String;
}