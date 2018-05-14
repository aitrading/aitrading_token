import {
    MultiSigWallet,
    AITTToken
} from './contracts';
import { networks } from './constants';
import { Utils } from './utils';

/** A util to get instances of all contracts from an existing Genesis address stored in constants. */
export class TokenContracts {

    public static async Get(w3: W3): Promise<TokenContracts> {
        let nid = await w3.networkId;
        let ns = networks.find(n => n.id === +nid);
        let mswAddress: string = '';
        if (ns && ns.mainContractAddress) {
            mswAddress = ns.mainContractAddress;
        } else {
            if (nid === '314') {
                let utils = new Utils(undefined, w3);
                let accounts = await w3.accounts;
                let msw = await utils.getMultiSig({ _owners: [accounts[0]], _required: 1 });
                mswAddress = await msw.address;
            } else {
                throw new Error('genesis address not set for network id: ' + nid);
            }
        }

        let instance = new TokenContracts(mswAddress, w3);
        return instance;
    }

    constructor(private mswAddress: string, private w3: W3) { }

    private token: AITTToken;
    public async getToken(): Promise<AITTToken>{
        if (this.token) {
            return this.token;
        }
        // let contract = await AITTToken.At(await (this.mswAddress).token(), this.w3);
        let contract = await AITTToken.At("0x04b9d7edfa4e8518c0fa1dbc4509b39aea5c8678", this.w3);
        this.token = contract;
        return contract;
    }

    private wallet: MultiSigWallet;
    public async getWallet(): Promise<MultiSigWallet>{
        if (this.wallet) {
            return this.wallet;
        }
        let contract = await MultiSigWallet.At(this.mswAddress, this.w3);
        this.wallet = contract;
        return contract;
    }

}
