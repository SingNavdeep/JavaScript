function pow(x, n) {
    let result = 1;
    let nan = NaN;

    if(n < 0)
    {
        result = nan;
    }
    else if(Math.round(n) != n)
    {
        result = nan;
    }
    else
    {
        for (let i = 0; i < n; i++) {
            result *= x;
        }
    }

    return result;
}