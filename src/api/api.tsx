
async function getData(url: string) {
    try {
        const quiz = await fetch(url);
        console.group("Loading data...");
        const data = await quiz.json();
        return data
    } catch (err: any) {
        console.error("Error: ", err.message);
    } finally {
        console.group("Success: All data is loaded!");
        console.groupEnd();
        console.groupEnd();
    }
}

let dataBlock: any = [];

 export async function setDataToSStorage(url: string) {
    try {
        clearSStorage();
        getData(url).then((data: any) => {
            sessionStorage.setItem("data", JSON.stringify(data))
        });
        return dataBlock
    } catch (err: any) {
        console.error("Error: ", err.message);
    } finally {
        console.log("Loading will be success!");
    }
}

function clearSStorage() {
    // @ts-ignore
    sessionStorage.setItem("data", []);
}

export function getDataFromSStorage() {
    const storageData = sessionStorage.getItem("data");
    return storageData ? JSON.parse(storageData) : [];
}



