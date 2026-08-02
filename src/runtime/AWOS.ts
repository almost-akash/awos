import { RuntimeState } from "./RuntimeState";

export class AWOS {
    private state: RuntimeState = RuntimeState.POWER_OFF;

    getState(): RuntimeState {
        return this.state;
    }

    async boot(onStateChange: (state: RuntimeState) => void) {
        this.state = RuntimeState.BOOTING;
        onStateChange(this.state);

        await this.delay(1000);

        this.state = RuntimeState.INITIALIZING;
        onStateChange(this.state);

        await this.delay(1000);

        this.state = RuntimeState.READY;
        onStateChange(this.state);
    }

    private delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}