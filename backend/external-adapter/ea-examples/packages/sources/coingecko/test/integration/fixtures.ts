import nock from 'nock'

export const mockCryptoSuccess = (): nock.Scope =>
  nock('https://api.coingecko.com/api/v3', {
    encodedQueryParams: true,
  })
    .persist()
    .get('/simple/price')
    .query({
      ids: 'ethereum',
      vs_currencies: 'USD',
      precision: 'full',
    })
    .reply(200, () => ({ ethereum: { usd: 4226.71 } }), [
      'Content-Type',
      'application/json',
      'Connection',
      'close',
      'Vary',
      'Accept-Encoding',
      'Vary',
      'Origin',
    ])
    .get('/simple/price')
    .query({
      ids: 'ethereum',
      vs_currencies: 'USD',
      include_market_cap: true,
      precision: 'full',
    })
    .reply(200, () => ({ ethereum: { usd: 4208.38, usd_market_cap: 499351414399.08246 } }), [
      'Content-Type',
      'application/json',
      'Connection',
      'close',
      'Vary',
      'Accept-Encoding',
      'Vary',
      'Origin',
    ])
    .get('/simple/price')
    .query({
      ids: 'ethereum',
      vs_currencies: 'USD',
      include_24hr_vol: true,
      precision: 'full',
    })
    .reply(200, () => ({ ethereum: { usd: 4220.49, usd_24h_vol: 17345604238.153397 } }), [
      'Content-Type',
      'application/json',
      'Connection',
      'close',
      'Vary',
      'Accept-Encoding',
      'Vary',
      'Origin',
    ])
    .get('/simple/price')
    .query((query) => {
      if (typeof query['ids'] !== 'string') {
        return false
      }
      const ids = query['ids'].split(',').sort()
      return ids[0] === 'ethereum' && ids[1] === 'olympus' && query['vs_currencies'] === 'USD'
    })
    .reply(
      200,
      () => ({
        ethereum: {
          usd: 3015.64,
        },
        olympus: {
          usd: 100,
        },
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .get('/coins/list')
    .query(() => true)
    .reply(
      200,
      () => [
        {
          id: 'ethereum',
          symbol: 'eth',
          name: 'Ethereum',
        },
      ],
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )

export const mockDominanceSuccess = (): nock.Scope =>
  nock('https://api.coingecko.com/api/v3', {
    encodedQueryParams: true,
  })
    .persist()
    .get('/global')
    .reply(
      200,
      () => ({
        data: {
          active_cryptocurrencies: 10029,
          upcoming_icos: 0,
          ongoing_icos: 50,
          ended_icos: 3375,
          markets: 667,
          total_market_cap: {
            btc: 43392107.56791172,
            eth: 651337294.4845811,
            ltc: 14040165762.183441,
            bch: 4401904771.003934,
            bnb: 5641701018.399031,
            eos: 569331947506.4436,
            xrp: 2501539206645.6313,
            xlm: 7182453997899.23,
            link: 85202625465.10268,
            dot: 61625216827.17345,
            yfi: 78546480.50774597,
            usd: 2744386468602.4453,
            aed: 10080680376470.477,
            ars: 273029129969970.34,
            aud: 3661697645732.8086,
            bdt: 235036903031814.94,
            bhd: 1034666631300.7429,
            bmd: 2744386468602.4453,
            brl: 15214329704638.227,
            cad: 3399883176628.1387,
            chf: 2524429381916.8945,
            clp: 2.217107496389857e15,
            cny: 17525103111201.486,
            czk: 60792644607033.875,
            dkk: 17583832981629.572,
            eur: 2363740065407.286,
            gbp: 1993453721131.101,
            hkd: 21334723187591.96,
            huf: 864717754846070.6,
            idr: 3.889221005912296e16,
            ils: 8784643866673.003,
            inr: 205905701724526.38,
            jpy: 312050463412440.7,
            krw: 3.205665525968423e15,
            kwd: 827322744824.891,
            lkr: 554351987955109.5,
            mmk: 5.076990753238587e15,
            mxn: 55383036241902.23,
            myr: 11393320424403.066,
            ngn: 1.125774773285409e15,
            nok: 22939558062836.62,
            nzd: 3830447225300.7056,
            php: 139063540159477.1,
            pkr: 478552390462549.2,
            pln: 10906965743210.256,
            rub: 19152935945030.12,
            sar: 10293087655980.916,
            sek: 23628346923112.938,
            sgd: 3696688573207.49,
            thb: 90732679727508.1,
            try: 26311530829079.09,
            twd: 76494835661035.95,
            uah: 72453948881323.11,
            vef: 274795417101.16254,
            vnd: 6.251438464026126e16,
            zar: 40401485397530.9,
            xdr: 1939246599603.2627,
            xag: 111794476425.18367,
            xau: 1519045354.236139,
            bits: 43392107567911.72,
            sats: 4.339210756791172e15,
          },
          total_volume: {
            btc: 1974791.4923271015,
            eth: 29642610.600796975,
            ltc: 638973339.9012328,
            bch: 200332377.91475627,
            bnb: 256755981.62524852,
            eos: 25910515742.663963,
            xrp: 113846010712.31677,
            xlm: 326876241880.7026,
            link: 3877604230.8865137,
            dot: 2804587302.2565384,
            yfi: 3574680.515717531,
            usd: 124898082937.58684,
            aed: 458775638246.3428,
            ars: 12425660638361.94,
            aud: 166645267159.47504,
            bdt: 10696619788834.0,
            bhd: 47088076044.465385,
            bmd: 124898082937.58684,
            brl: 692409992189.3934,
            cad: 154729990047.2294,
            chf: 114887751386.30504,
            clp: 100901414262788.25,
            cny: 797574178022.8416,
            czk: 2766696620535.069,
            dkk: 800246996997.7057,
            eur: 107574718834.14354,
            gbp: 90722844993.78963,
            hkd: 970951451852.6522,
            huf: 39353637360472.51,
            idr: 176999942254157.2,
            ils: 399792518579.0688,
            inr: 9370847621329.434,
            jpy: 14201536520418.295,
            krw: 145891070121934.28,
            kwd: 37651776082.36482,
            lkr: 25228772026227.047,
            mmk: 23105580042404.62,
            mxn: 2520503264760.31,
            myr: 518514391315.3924,
            ngn: 51234442601827.484,
            nok: 1043988103812.0653,
            nzd: 174325125381.22437,
            php: 6328835159021.062,
            pkr: 21779103212241.6,
            pln: 496380202853.35803,
            rub: 8716574759172.706,
            sar: 468442375171.46387,
            sek: 1075335149565.8241,
            sgd: 168237717716.9293,
            thb: 4129279125737.237,
            try: 1197447880355.82,
            twd: 3481309370234.0195,
            uah: 3297407059853.1543,
            vef: 12506045044.540556,
            vnd: 2845053671164496.5,
            zar: 1838687127965.6843,
            xdr: 88255858059.60628,
            xag: 5087809588.139813,
            xau: 69132337.88678366,
            bits: 1974791492327.1016,
            sats: 197479149232710.16,
          },
          market_cap_percentage: {
            btc: 43.44997991532859,
            eth: 18.127134683884314,
            bnb: 2.980048065608618,
            usdt: 2.573658498168007,
            ada: 2.52629821004899,
            sol: 2.3331943922773264,
            xrp: 1.876316404018816,
            dot: 1.693595215859927,
            doge: 1.2632700876945198,
            usdc: 1.1923497139339645,
          },
          market_cap_change_percentage_24h_usd: 5.41419196485212,
          updated_at: 1635189786,
        },
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
