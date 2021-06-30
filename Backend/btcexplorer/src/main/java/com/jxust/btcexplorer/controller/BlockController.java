package com.jxust.btcexplorer.controller;

import com.jxust.btcexplorer.entity.*;
import com.jxust.btcexplorer.service.BTCService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BlockController {

    private BTCService service = new BTCService();
    @RequestMapping("/blockhash.html")
    public String blockhash() {
        return "blockhash.html";
    }

    @RequestMapping("/blockinfo.html")
    public String blockInfo() {
        return "blockinfo.html";
    }

    @RequestMapping("/Wallet.html")
    public String wallet() {
        return "Wallet.html";
    }

    @RequestMapping("/utils.html")
    public String utils() {
        return "utils.html";
    }

    @RequestMapping("/control.html")
    public String control() {
        return "control.html";
    }


    @RequestMapping("/getblockhash")
    public String getBlockHash(@RequestParam("height") int height, Model model) {
        String hashCode = service.getBlockHash(height);
        System.out.println(hashCode);
        model.addAttribute("hash",hashCode);
        return "blockinfo.html";
    }

    @RequestMapping("/getblockinfo")
    public String getBlock(@RequestParam("hash") String hash, Model model) {
        Block blockInfo = service.getBlock(hash);
        System.out.println(blockInfo);
        model.addAttribute("size", blockInfo.getSize());
        model.addAttribute("nextblockhash", blockInfo.getNextblockhash());

        return "blockinfo.html";
    }

    @RequestMapping("/getnewaddress")
    public String getNewAddress(@RequestParam("label") String label,
                                @RequestParam("address_type") String address_type, Model model) {
        String newAddress = service.getNewAddress(label,address_type);
        System.out.println(newAddress);
        model.addAttribute("newAddress",newAddress);
        return "blockinfo.html";
    }

    @RequestMapping("/getdifficulty")
    public String getDifficulty(Model model) {
        Double difficulty = service.getDifficulty();
        System.out.println(difficulty);
        model.addAttribute("difficulty",difficulty);
        return "blockinfo.html";
    }
    @RequestMapping("/getblockcount")
    public String getBlockCount(Model model) {
        Integer count = service.getBlockCount();
        System.out.println(count);
        model.addAttribute("count",count);
        return "blockinfo.html";
    }

    @RequestMapping("/getbestblockhash")
    public String getBestBlockHash(Model model) {
        String bestHash = service.getBestBlockHash();
        System.out.println(bestHash);
        model.addAttribute("besthash",bestHash);
        return "blockinfo.html";
    }

    @RequestMapping("/getblockchaininfo")
    public String getBlockChainInfo(Model model) {
        BlockChainInfo blockChain = service.getBlockChainInfo();

        System.out.println(blockChain);
        model.addAttribute("blockchainblocks",blockChain.getBlocks());
        model.addAttribute("blockchainbip",blockChain.getChain());
        return "blockinfo.html";
    }

    @RequestMapping("/getblockchaintips")
    public String getBlockChainTips(Model model) {
        ChainTips tips = service.getChainTips();
        System.out.println(tips);
        model.addAttribute("chainTipsStatus",tips.getStatus());
        model.addAttribute("chainTipsHash",tips.getHash());
        model.addAttribute("branchLength",tips.getBranchlen());
        return "blockinfo.html";
    }

    @RequestMapping("/setpreciousblock")
    public String setPreciousBlock(@RequestParam("hash") String hash, Model model) {
        String confirmation = service.setPreciousBlock(hash);
        System.out.println(confirmation);
        model.addAttribute("preciousBlockConfirm",confirmation);
        return "blockinfo.html";
    }

    @RequestMapping("/getmempoolinfo")
    public String getMemPoolInfo(Model model) {
        MemPool getInfo = service.getMemPoolInfo();
        System.out.println(getInfo);
        model.addAttribute("mempoolsize",getInfo.getSize());
        model.addAttribute("maxem",getInfo.getMaxmempool());
        model.addAttribute("usage",getInfo.getUsage());
        return "blockinfo.html";
    }

    @RequestMapping("/listwallets")
    public String listWallets(Model model) {
        String wallets = service.listWallets();
        System.out.println(wallets);
        model.addAttribute("wallets",wallets);
        return "Wallet.html";
    }

    @RequestMapping("/walletinfo")
    public String getWalletInfo(Model model) {
        WalletInfo walletInfo = service.getWalletInfo();
        System.out.println(walletInfo);
        model.addAttribute("walletInfoName",walletInfo.getWalletname());
        model.addAttribute("walletInfoScanning",walletInfo.isScanning());
        model.addAttribute("walletInfoBalance",walletInfo.getBalance());
        model.addAttribute("walletInfoImmatureBalance",walletInfo.getImmature_balance());

        return "Wallet.html";
    }
    @RequestMapping("/getbalance")
    public String getBalance(Model model) {
        Integer balances = service.getBalance();
        System.out.println(balances);
        model.addAttribute("balance",balances);
        return "Wallet.html";
    }


    @RequestMapping("/getrpcinfo")
    public String getRPCInfo(Model model) {
        RPCInfo rpcInfo = service.getRPCInfo();
        System.out.println(rpcInfo);
        model.addAttribute("active_commands",rpcInfo.getActive_commands());
        model.addAttribute("logpath",rpcInfo.getLogpath());
        return "control.html";
    }
    @RequestMapping("/uptime")
    public String uptime(Model model) {
        Integer uptime = service.getUptime();
        System.out.println(uptime);
        model.addAttribute("uptime",uptime.intValue());
        model.addAttribute("uptimehash",uptime.hashCode());
        return "control.html";
    }
}
