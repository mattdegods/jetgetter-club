import axios from "axios";
import DEFAULTS from "../globals";

export const getStakedGods = async (address) => {
  let data = JSON.stringify({
    pubkey: address,
  });

  let config = {
    method: "post",
    url: "https://api.degods.com/v1/farmerstats",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await axios(config)
    .then((response) => {
      let staked =
        response && response?.data?.gems?.length > 0 ? response.data.gems : [];
      return staked.map((god) => {
        const {
          mint,
          externalMetadata: { image, name },
        } = god;
        return {
          id: parseInt(name.split("#")[1]) - 1,
          name,
          image,
          mint,
        };
      });
    })
    .catch((error) => {
      console.log("staked error: ", error.message);
    });
};

export const getWalletGods = async (address) => {
  let data = JSON.stringify({
    wallet: address,
  });

  let config = {
    method: "post",
    url: "https://api.degods.com/v1/walletattributes",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await axios(config)
    .then((response) => {
      if (response && response?.data?.details) {
        return response?.data?.details?.map((god) => {
          const { name, mint } = god;
          return {
            id: parseInt(name.split("#")[1]) - 1,
            name,
            image: `${DEFAULTS.METADATA_CDN_URL}/g/${parseInt(
              name.split("#")[1] - 1
            )}.png`,
            mint,
          };
        });
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.log("wallet error: ", error.message);
    });
};

const getUserDeGods = async (publicKey) => {
  let walletDeGods = await getWalletGods(publicKey);
  let stakedDeGods = await getStakedGods(publicKey);

  let userDeGods = [];

  for (let i = 0; i < stakedDeGods.length; i++) {
    let { attributes } = (
      await axios.get(
        `https://metadata.degods.com/g/${stakedDeGods[i].id}.json`
      )
    ).data;
    if (attributes[8].value !== "DeadGod") userDeGods.push(stakedDeGods[i]);
  }

  for (let i = 0; i < walletDeGods.length; i++) {
    let { attributes } = (
      await axios.get(
        `https://metadata.degods.com/g/${walletDeGods[i].id}.json`
      )
    ).data;
    if (attributes[8].value !== "DeadGod") userDeGods.push(walletDeGods[i]);
  }

  return userDeGods;
};

export default getUserDeGods;
