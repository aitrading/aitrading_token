Balance before redeploying all: 2.32989629, started at Nov-14-2017 04:33:17 AM +UTC
Balance after: 1.97973551, ended at Nov-14-2017 04:40:02 AM +UTC

0.35 ETH @ 20 Gwei. Expect ETH 0.035 (c.$11) total deployment cost on Mainnet @2Gwei.


## Rinkeby setup

Full node: https://www.rinkeby.io/#geth

Download json file from the link to the `datadir` and run the following commands:

```
geth --datadir=C:\Data\Ethereum\.rinkeby init rinkeby.json

geth --networkid=4 --datadir=C:\Data\Ethereum\.rinkeby --port 30304 --cache=512 --ethstats="yournode:Respect my authoritah!@stats.rinkeby.io" --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303 --rpc --rpcport 8544 --rpcapi="db,eth,net,web3,personal,web3" --rpccorsdomain "http://localhost:3000 http://192.168.1.11:3000"

```


## Ropsten setup

geth --testnet --fast --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303" --maxpeers "25" --ipcpath testnet.ipc --rpcport 8546 --rpc --rpcapi="admin,db,eth,net,web3,personal,web3" --rpccorsdomain "*"
