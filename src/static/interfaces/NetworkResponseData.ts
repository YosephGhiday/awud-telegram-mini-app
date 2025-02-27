export interface NetworkResponseData<T> {
    success: boolean;
    status: number;
    data: T;
    errorMessage: string;
}