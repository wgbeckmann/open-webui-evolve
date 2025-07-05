import { registerChatMessageInterceptor } from './chatMessageInterceptor';

export function setupLogChatInterceptor() {
    registerChatMessageInterceptor((chatId, payload) => {
        console.log('Chat payload for', chatId, payload);
        return payload;
    });
}
