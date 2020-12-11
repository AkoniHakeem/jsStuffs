        // binary gap zeros between 1s
        // get binary
        // split on 1s
        // count elem str
        // map counts
        // record largest

        //zero gaps has to be between 1s

        const getGap = (N) => {
            const binary = N.toString(2);
            let binArr = binary.split("1");
            let binMap = {}
            let hightZeros = 0
            let i = 0
            if(binary[binary.length -1] == "1") {
                for(e of binArr) {
                    if(e.length > hightZeros) {
                        hightZeros = e.length;
                    }
                }
            }
            else {
                binArr.pop();
                if(binArr.length > 0) {
                    for(e of binArr) {
                        if(e.length > hightZeros) {
                            hightZeros = e.length;
                        }
                    }
                }
            }
            console.log(hightZeros)
            return hightZeros
        }

        getGap(20);
        