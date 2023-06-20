function arrayChunks(ary, size) {
    var chunks = []
    for (var i = 0; i < ary.length; i += size) {
        chunks.push(ary.slice(i, i + size))
    }
    return chunks
}

function base62encode(n) {
    if (n === 0) {
        return '0'
    }
    var digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    while (n > 0) {
        result = digits[n % digits.length] + result
        n = parseInt(n / digits.length, 10)
    }
    return result
}

function base62decode(s) {
    var digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = 0
    for (var i = 0; i < s.length; i++) {
        var p = digits.indexOf(s[i])
        if (p < 0) {
            return NaN;
        }
        result += p * Math.pow(digits.length, s.length - i - 1)
    }
    return result
}

function encodeAnswers(version, answers) {
    var chunked = arrayChunks(answers, 15)
    var encoded = []
    for (var chunk of chunked) {
        var numStr = chunk.reduce((str, num) => str + num, '' + version)
        var numRaw = parseInt(numStr, 10)
        var numEnc = base62encode(numRaw)
        encoded.push(numEnc)
    }
    return encoded.join('-')
}

function decodeAnswers(encoded) {
    var answers = []
    var version = 0
    if (encoded) {
        var chunks = encoded.split('-')
        for (var chunk of chunks) {
            var numRaw = base62decode(chunk)
            var numStr = '' + numRaw
            var digits = numStr.split('').map(num => parseInt(num, 10))
            var chunkVersion = parseInt(digits.shift())
            if (!version && chunkVersion) {
                version = chunkVersion
            } else if (version !== chunkVersion) {
                console.warn('Version mismatch in encoded answers!')
                return {
                    version: 0,
                    answers: []
                }
            }
            answers = answers.concat(digits)
        }
    }

    if (version === 1 && answers.length === 44) {
        answers.splice(5, 0, 0) // add O-6 answer to make it version 2
        version = 2
    }

    if (version < 0 || version > 2) {
        version = 0
    }

    return {
        version,
        answers
    }
}

export {
    decodeAnswers,
    encodeAnswers,
}