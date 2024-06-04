//----------------------------------------------------------------------------
function countingTruthy() {
    let arrTruth = [true, true, false, true, false, true, false, false, false, true]
    let count = 0
    console.log(arrTruth)

    for (let i = 0; i < arrTruth.length; i++) {
        if (arrTruth[i] === true) {
            count += 1
        }
    }
    console.log(count)
}
countingTruthy()

//----------------------------------------------------------------------------
