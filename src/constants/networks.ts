export interface NetworkParams {
    id: number;
    name: string;
    mainContractAddress?: string;
}

// Crowdsale contract creates all other contracts

export let networks: NetworkParams[] = [
    {
        id: 1,
        name: 'Mainnet',
        mainContractAddress: undefined
    },
    {
        id: 3,
        name: 'Ropsten',
        mainContractAddress: '0x4823a0d5ddc67258d97e09e56bd8cf347a4b75e8'
    },
    {
        id: 4,
        name: 'Rinkeby',
        mainContractAddress: '0x06ad52cd09c98d7f7d77013c2eae031407269a3c'
    },
    {
        id: 42,
        name: 'Kovan',
        mainContractAddress: '0x98049a961f4e0c095c17f92325646ec83019cb51'
    },
    {
        id: 314,
        name: 'TestRPC',
        mainContractAddress: undefined
    }
];
