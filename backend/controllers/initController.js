const models = require('../models/index');
const tatumController = require('./tatumController');
const config = require('../config');

exports.initTatumBTC = async () => {
    try {
        if (!config.ENABLE_TATUM) {
            console.log('Tatum API is disabled. Skipping BTC wallet initialization.');
            return;
        }
        let btcSetting = await models.settingModel.exists({ key: 'BTCWalletInfo' });
        if (btcSetting === null) {
            let btcWallet = await tatumController.createBitcoinWallet();
            if (btcWallet === null) {
                console.warn('initTatumBTC: createBitcoinWallet failed (Tatum API may be unavailable)');
                return;
            }

            let virtualAccount = await tatumController.createVirtualAccount({ xpub: btcWallet.xpub, coinType: 'BTC' });
            if (virtualAccount === null) {
                console.warn('initTatumBTC: createVirtualAccount failed (Tatum API may be unavailable)');
                return;
            }

            models.settingModel.create({ key: 'BTCWalletInfo', dataObject: { mnemonic: btcWallet.mnemonic, xpub: btcWallet.xpub, virtualAccount: virtualAccount } });
            console.log('BTCWalletInfo setting firstly saved');
        }
    }
    catch (err) {
        console.warn({ title: 'initContoller - initTatumBTC', message: err.message, note: 'Tatum API may be unavailable - continuing without it' });
        return undefined;
    }
}

exports.initTatumETH = async () => {
    try {
        if (!config.ENABLE_TATUM) {
            console.log('Tatum API is disabled. Skipping ETH wallet initialization.');
            return;
        }
        let ethSetting = await models.settingModel.exists({ key: 'ETHWalletInfo' });
        if (ethSetting === null) {
            let ethWallet = await tatumController.createEthereumWallet();
            if (ethWallet === null) {
                console.warn('initTatumETH: createEthereumWallet failed (Tatum API may be unavailable)');
                return;
            }

            let virtualAccount = await tatumController.createVirtualAccount({ xpub: ethWallet.xpub, coinType: 'ETH' });
            if (virtualAccount === null) {
                console.warn('initTatumETH: createVirtualAccount failed (Tatum API may be unavailable)');
                return;
            }

            models.settingModel.create({ key: 'ETHWalletInfo', dataObject: { mnemonic: ethWallet.mnemonic, xpub: ethWallet.xpub, virtualAccount: virtualAccount } });
            console.log('ETHWalletInfo setting firstly saved');
        }
    }
    catch (err) {
        console.warn({ title: 'initContoller - initTatumETH', message: err.message, note: 'Tatum API may be unavailable - continuing without it' });
        return undefined;
    }
}

exports.initTatumTRX = async () => {
    try {
        if (!config.ENABLE_TATUM) {
            console.log('Tatum API is disabled. Skipping TRON wallet initialization.');
            return;
        }
        let trxSetting = await models.settingModel.exists({ key: 'TRONWalletInfo' });
        if (trxSetting === null) {
            let trxWallet = await tatumController.createTronWallet();
            if (trxWallet === null) {
                console.warn('initTatumTrx: createTronWallet failed (Tatum API may be unavailable)');
                return;
            }

            let virtualAccount = await tatumController.createVirtualAccount({ xpub: trxWallet.xpub, coinType: 'TRON' });
            if (virtualAccount === null) {
                console.warn('initTatumTrx: createVirtualAccount failed (Tatum API may be unavailable)');
                return;
            }

            models.settingModel.create({ key: 'TRONWalletInfo', dataObject: { mnemonic: trxWallet.mnemonic, xpub: trxWallet.xpub, virtualAccount: virtualAccount } });
            console.log('TRONWalletInfo setting firstly saved');
        }
    }
    catch (err) {
        console.warn({ title: 'initContoller - initTatumTRX', message: err.message, note: 'Tatum API may be unavailable - continuing without it' });
        return undefined;
    }
}

exports.initTatumBSC = async () => {
    try {
        if (!config.ENABLE_TATUM) {
            console.log('Tatum API is disabled. Skipping BSC wallet initialization.');
            return;
        }
        let bscSetting = await models.settingModel.exists({ key: 'BSCWalletInfo' });
        if (bscSetting === null) {
            let bscWallet = await tatumController.createBSCWallet();
            if (bscWallet === null) {
                console.warn('initTatumBsc: createBscWallet failed (Tatum API may be unavailable)');
                return;
            }

            let virtualAccount = await tatumController.createVirtualAccount({ xpub: bscWallet.xpub, coinType: 'BSC' });
            if (virtualAccount === null) {
                console.warn('initTatumBsc: createVirtualAccount failed (Tatum API may be unavailable)');
                return;
            }

            models.settingModel.create({ key: 'BSCWalletInfo', dataObject: { mnemonic: bscWallet.mnemonic, xpub: bscWallet.xpub, virtualAccount: virtualAccount } });
            console.log('BSCWalletInfo setting firstly saved');
        }
    }
    catch (err) {
        console.warn({ title: 'initContoller - initTatumBSC', message: err.message, note: 'Tatum API may be unavailable - continuing without it' });
        return undefined;
    }
}