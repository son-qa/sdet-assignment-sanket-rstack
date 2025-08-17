import axios from "axios";
import { Buffer } from "buffer";
import logger from "./logger-module";


export class SendEvent {
    private readonly baseURL: string;
    private readonly authorization: string;
    private path = {
        identify: '/v1/identify',
    };

    public eventTypes = {
        IDENTIFY: 'identify',
    }

    constructor(dataPlane: string, writeKey: string) {
        this.baseURL = dataPlane;
        this.authorization = `Basic ${Buffer.from(writeKey + ":").toString("base64")}`;
    }

    async identify(payload: object) {
        try {
            let url = this.baseURL + this.path.identify;
            return await axios.post(
                url,
                payload,
                {
                    headers: {
                        'Authorization': this.authorization,
                        'Content-Type': 'application/json'
                    }
                }
            )
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }
}
