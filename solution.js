let count = (start, timeout = 1000) => {
    console.log(start);
    setTimeout(
        () => {
            if (start < 1) {
                return
            }
            let newStart = start-1
            count(newStart, timeout)
        },
        timeout
    )
}

// count(10)
count(10, 500)