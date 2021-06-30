package com.jxust.btcexplorer.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;
import com.jxust.btcexplorer.entity.*;
import com.jxust.btcexplorer.httputils.RPCRequest;

/**
 * BTCService provide some functions that these func invoke bitcoin core rpc
 * service by one to one
 */
public class BTCService {
    //get block hash by height of block
    private static final String GETBLOCKHASH = "getblockhash";
    private static final String GETBLOCK = "getblock";
    private static final String GETBESTBLOCKHASH = "getbestblockhash";
    private static final String GETBLOCKCHAININFO = "getblockchaininfo";
    private static final String GETNEWADDRESS = "getnewaddress";
    private static final String GETBLOCKCOUNT = "getblockcount";
    private static final String GETDIFFICULTY = "getdifficulty";
    private static final String LISTWALLETS = "listwallets";
    private static final String GETWALLETINFO = "getwalletinfo";
    private static final String GETBALANCE = "getbalance";
    private static final String VALIDATEADDRESS = "validateaddress";
    private static final String GETRPCINFO = "getrpcinfo";
    private static final String UPTIME = "uptime";
    private static final String GETCHAINTIPS = "getchaintips";
    private static final String PRECIOUSBLOCK = "preciousblock";
    private static final String MEMPOOLINFO = "getmempoolinfo";




    public String getBlockHash(int number) {
        String result = RPCRequest.rpcPost(GETBLOCKHASH, number);

        BaseEntity<String> baseEntity = JSONObject.parseObject(result,
                new TypeReference<BaseEntity<String>>() {
                });
        return baseEntity.getResult();
    }


    public Block getBlock(String hash) {
        String result = RPCRequest.rpcPost(GETBLOCK, hash);
        //2、parse result(is json structure) to a java object in memory
        BaseEntity<Block> baseEntity = JSONObject.parseObject(result,
                new TypeReference<BaseEntity<Block>>() {
                });
        return baseEntity.getResult();
    }

    public String getBestBlockHash() {
        String result = RPCRequest.rpcPost(GETBESTBLOCKHASH);
        BaseEntity<String> baseEntity = JSONObject.parseObject(result,
                new TypeReference<BaseEntity<String>>() {
                });
        return baseEntity.getResult();
    }

    public BlockChainInfo getBlockChainInfo() {
        String result = RPCRequest.rpcPost(GETBLOCKCHAININFO);
        BaseEntity<BlockChainInfo> chainInfoEntity = JSONObject.parseObject(
                result,
                new TypeReference<BaseEntity<BlockChainInfo>>() {
                }
        );
        return chainInfoEntity.getResult();
    }


    public String getNewAddress(String label, String address_type) {

        String address = RPCRequest.rpcPost(GETNEWADDRESS, label, address_type);
        return baseEntityString(address);
    }

    public int getBlockCount() {
        String blockCount = RPCRequest.rpcPost(GETBLOCKCOUNT);

        BaseEntity<Integer> baseEntity = JSONObject.parseObject(blockCount,
                new TypeReference<BaseEntity<Integer>>() {
                });
        return baseEntity.getResult().intValue();
    }
    public ChainTips getChainTips() {
        String tips = RPCRequest.rpcPost(GETCHAINTIPS);

        BaseEntity<ChainTips> baseEntity = JSONArray.parseObject(tips,
                new TypeReference<BaseEntity<ChainTips>>() {
                });
        return baseEntity.getResult();
    }
    public String setPreciousBlock(String hash) {

        String preciousBlock = RPCRequest.rpcPost(PRECIOUSBLOCK, hash);

        return baseEntityString(preciousBlock);
    }

    public MemPool getMemPoolInfo(){
        String result = RPCRequest.rpcPost(MEMPOOLINFO);
        BaseEntity<MemPool> BaseEntity = JSONObject.parseObject(
                result,
                new TypeReference<BaseEntity<MemPool>>() {
                });
        return BaseEntity.getResult();
    }
    public double getDifficulty() {
        String result = RPCRequest.rpcPost(GETDIFFICULTY);
        BaseEntity<Double> baseEntity = JSONObject.parseObject(result,
                new TypeReference<BaseEntity<Double>>() {
                });
        double difficulty = baseEntity.getResult().doubleValue();
        if (difficulty > 0) {

            return difficulty;
        }
        return -1;
    }

    public String listWallets() {
        String result = RPCRequest.rpcPost(LISTWALLETS);
        return baseEntityString(result);
    }
    public Integer getBalance() {
        String balance = RPCRequest.rpcPost(GETBALANCE);

        BaseEntity<Integer> baseEntity = JSONObject.parseObject(balance,
                new TypeReference<BaseEntity<Integer>>() {
                });
        return baseEntity.getResult().intValue();

    }
    public WalletInfo getWalletInfo() {
        String result = RPCRequest.rpcPost(GETWALLETINFO);
        BaseEntity<WalletInfo> walletInfo = JSONObject.parseObject(
                result,
                new TypeReference<BaseEntity<WalletInfo>>() {
                });
        return walletInfo.getResult();

    }
    public ValidateAddress validateAddress() {
        String result = RPCRequest.rpcPost(VALIDATEADDRESS);
        BaseEntity<ValidateAddress> validated = JSONObject.parseObject(
                result,
                new TypeReference<BaseEntity<ValidateAddress>>() {
                });
        return validated.getResult();

    }

    public RPCInfo getRPCInfo() {
        String result = RPCRequest.rpcPost(GETRPCINFO);
        BaseEntity<RPCInfo> rpcInfoBaseEntity = JSONObject.parseObject(
                result,
                new TypeReference<BaseEntity<RPCInfo>>() {
                });
        return rpcInfoBaseEntity.getResult();

    }
    public int getUptime() {
        String uptime = RPCRequest.rpcPost(UPTIME);
        BaseEntity<Integer> baseEntity = JSONObject.parseObject(uptime,
                new TypeReference<BaseEntity<Integer>>() {
                });
        return baseEntity.getResult().intValue();
    }

    public String baseEntityString(String result){
        BaseEntity<String> baseEntity = JSONObject.parseObject(result,
                new TypeReference<BaseEntity<String>>() {
                });
        return baseEntity.getResult();

    }



}
