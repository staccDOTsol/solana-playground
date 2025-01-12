/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_pgrpc_free(a: number): void;
export function pgrpc_getAccountInfo(a: number, b: number, c: number): number;
export function pgrpc_getSlot(a: number): number;
export function pgrpc_getBlockHeight(a: number): number;
export function pgrpc_getGenesisHash(a: number, b: number): void;
export function pgrpc_getLatestBlockhash(a: number): number;
export function pgrpc_getMinimumBalanceForRentExemption(a: number, b: number): number;
export function pgrpc_getFeeForMessage(a: number, b: number, c: number, d: number): void;
export function pgrpc_simulateTransaction(a: number, b: number, c: number): number;
export function pgrpc_sendTransaction(a: number, b: number, c: number): number;
export function pgrpc_getSignatureStatuses(a: number, b: number, c: number): number;
export function pgrpc_getTransaction(a: number, b: number, c: number): number;
export function pgrpc_requestAirdrop(a: number, b: number, c: number, d: number): number;
export function __wbg_confirmedtransactionmeta_free(a: number): void;
export function confirmedtransactionmeta_fee(a: number): number;
export function confirmedtransactionmeta_innerInstructions(a: number): number;
export function confirmedtransactionmeta_preBalances(a: number, b: number): void;
export function confirmedtransactionmeta_postBalances(a: number, b: number): void;
export function confirmedtransactionmeta_logs(a: number, b: number): void;
export function confirmedtransactionmeta_err(a: number, b: number): void;
export function confirmedtransactionmeta_computeUnitsConsumed(a: number, b: number): void;
export function confirmedtransactionmeta_preTokenBalances(a: number): number;
export function confirmedtransactionmeta_postTokenBalances(a: number): number;
export function confirmedtransactionmeta_loadedAddresses(a: number): number;
export function __wbg_playnet_free(a: number): void;
export function __wbg_get_playnet_rpc(a: number): number;
export function __wbg_set_playnet_rpc(a: number, b: number): void;
export function playnet_new(a: number, b: number): number;
export function playnet_getSaveData(a: number, b: number): void;
export function __wbg_wasmaccount_free(a: number): void;
export function __wbg_get_wasmaccount_data(a: number, b: number): void;
export function __wbg_set_wasmaccount_data(a: number, b: number, c: number): void;
export function __wbg_get_wasmaccount_owner(a: number): number;
export function __wbg_set_wasmaccount_owner(a: number, b: number): void;
export function __wbg_get_wasmaccount_executable(a: number): number;
export function __wbg_set_wasmaccount_executable(a: number, b: number): void;
export function __wbg_get_wasmaccount_rentEpoch(a: number): number;
export function __wbg_set_wasmaccount_rentEpoch(a: number, b: number): void;
export function __wbg_getlatestblockhashresult_free(a: number): void;
export function getlatestblockhashresult_blockhash(a: number, b: number): void;
export function __wbg_wasmtransactionreturndata_free(a: number): void;
export function __wbg_get_wasmtransactionreturndata_programId(a: number): number;
export function __wbg_set_wasmtransactionreturndata_programId(a: number, b: number): void;
export function __wbg_get_wasmtransactionreturndata_data(a: number, b: number): void;
export function __wbg_set_wasmtransactionreturndata_data(a: number, b: number, c: number): void;
export function __wbg_simulatetransactionresult_free(a: number): void;
export function simulatetransactionresult_error(a: number, b: number): void;
export function simulatetransactionresult_logs(a: number, b: number): void;
export function simulatetransactionresult_returnData(a: number): number;
export function __wbg_sendtransactionresult_free(a: number): void;
export function sendtransactionresult_error(a: number, b: number): void;
export function sendtransactionresult_txHash(a: number, b: number): void;
export function __wbg_getsignaturestatusesresult_free(a: number): void;
export function getsignaturestatusesresult_statuses(a: number, b: number): void;
export function __wbg_transactionstatus_free(a: number): void;
export function __wbg_get_transactionstatus_confirmationStatus(a: number): number;
export function __wbg_set_transactionstatus_confirmationStatus(a: number, b: number): void;
export function __wbg_get_transactionstatus_confirmations(a: number, b: number): void;
export function __wbg_set_transactionstatus_confirmations(a: number, b: number, c: number): void;
export function __wbg_get_transactionstatus_slot(a: number): number;
export function __wbg_set_transactionstatus_slot(a: number, b: number): void;
export function transactionstatus_error(a: number, b: number): void;
export function __wbg_gettransactionresult_free(a: number): void;
export function gettransactionresult_exists(a: number): number;
export function gettransactionresult_blockTime(a: number, b: number): void;
export function gettransactionresult_version(a: number): number;
export function gettransactionresult_meta(a: number): number;
export function gettransactionresult_transaction(a: number, b: number): void;
export function __wbg_set_wasmaccount_lamports(a: number, b: number): void;
export function getlatestblockhashresult_lastValidBlockHeight(a: number): number;
export function simulatetransactionresult_unitsConsumed(a: number): number;
export function __wbg_get_wasmaccount_lamports(a: number): number;
export function __wbg_transaction_free(a: number): void;
export function transaction_constructor(a: number, b: number): number;
export function transaction_message(a: number): number;
export function transaction_messageData(a: number, b: number): void;
export function transaction_verify(a: number, b: number): void;
export function transaction_partialSign(a: number, b: number, c: number): void;
export function transaction_isSigned(a: number): number;
export function transaction_toBytes(a: number, b: number): void;
export function transaction_fromBytes(a: number, b: number, c: number): void;
export function __wbg_keypair_free(a: number): void;
export function keypair_constructor(): number;
export function keypair_toBytes(a: number, b: number): void;
export function keypair_fromBytes(a: number, b: number, c: number): void;
export function keypair_pubkey(a: number): number;
export function __wbg_instruction_free(a: number): void;
export function __wbg_hash_free(a: number): void;
export function __wbg_pubkey_free(a: number): void;
export function __wbg_instructions_free(a: number): void;
export function instructions_constructor(): number;
export function instructions_push(a: number, b: number): void;
export function __wbg_message_free(a: number): void;
export function __wbg_get_message_recent_blockhash(a: number): number;
export function __wbg_set_message_recent_blockhash(a: number, b: number): void;
export function systeminstruction_createAccount(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_createAccountWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function systeminstruction_assign(a: number, b: number): number;
export function systeminstruction_assignWithSeed(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_transfer(a: number, b: number, c: number): number;
export function systeminstruction_transferWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function systeminstruction_allocate(a: number, b: number): number;
export function systeminstruction_allocateWithSeed(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function systeminstruction_createNonceAccount(a: number, b: number, c: number, d: number): number;
export function systeminstruction_advanceNonceAccount(a: number, b: number): number;
export function systeminstruction_withdrawNonceAccount(a: number, b: number, c: number, d: number): number;
export function systeminstruction_authorizeNonceAccount(a: number, b: number, c: number): number;
export function pubkey_constructor(a: number, b: number): void;
export function pubkey_toString(a: number, b: number): void;
export function pubkey_isOnCurve(a: number): number;
export function pubkey_equals(a: number, b: number): number;
export function pubkey_toBytes(a: number, b: number): void;
export function pubkey_createWithSeed(a: number, b: number, c: number, d: number, e: number): void;
export function pubkey_createProgramAddress(a: number, b: number, c: number, d: number): void;
export function pubkey_findProgramAddress(a: number, b: number, c: number, d: number): void;
export function hash_constructor(a: number, b: number): void;
export function hash_toString(a: number, b: number): void;
export function hash_equals(a: number, b: number): number;
export function hash_toBytes(a: number, b: number): void;
export function solana_program_init(): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
