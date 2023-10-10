//@ts-ignore

onmessage = ev => {
    if(ev.data === "start") {
        postMessage("test")
    }
}

export {}