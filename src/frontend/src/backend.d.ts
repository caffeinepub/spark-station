import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    service: Service;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone?: string;
}
export enum Service {
    appDevelopment = "appDevelopment",
    webDevelopment = "webDevelopment",
    consultancy = "consultancy",
    branding = "branding",
    productDesign = "productDesign"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    sendInquiry(name: string, email: string, phone: string | null, service: Service, message: string): Promise<void>;
}
