# `rpc_example.py` example
import datetime
import json
from bitcoin.rpc import RawProxy
import time

# Create a connection to local Bitcoin Core node
p = RawProxy()
# Run the getblockchaininfo command, store the resulting data in info
info = p.getblockchaininfo()

# Retrieve the 'blocks' element from the info
print(info['blocks'])

#info = p.getblockchaininfo()

blockheight = info['blocks'] #277316
index = 0
blockhash = []

data = {}
data['block'] = []

for x in range(blockheight, -1, -1):

    blockhash = p.getblockhash(x)  # block hash
    block = p.getblock(blockhash)

    # block = x
    #version = block['version']    #version
    merkle = block['merkleroot']  # merkle root
    time = block['time']
    height = block['height']  # height
    size1 = block['size']  # size in bytes
    realtime = datetime.datetime.fromtimestamp(time)  # timestamp

    data['block'].append({
        'height': height,
        'hash': blockhash,
        'timestamp': time,
        'size': size1,
        'merkle': merkle
    })
    #print(height)
    #print(blockhash)
    #print(version)
    #print(merkle)
    #print(realtime)
    #print(size1)
    #index = index + 1



with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)



#timestamp = block['ntime']

