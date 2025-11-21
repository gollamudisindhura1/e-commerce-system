class ApiError extends Error {
    constructor(message: string, public statusCode?: number){
        super(message)
        this.name = "APiError";
    }
}

function handleError(error: unknown): void {
    if(error instanceof ApiError){
        console.error(`API ERROR ${error.statusCode}:${error.message}`);
    }else if (error instanceof Error){
        console.error(`Error: ${error.message}`);
    }else {
        console.error("AN unknown error occured");
    }
}