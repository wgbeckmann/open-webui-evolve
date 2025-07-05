// Intercepts chat messages before sending them to the server.
// Consumers can register a custom interceptor which receives the
// current chatId and the message payload. The interceptor can
// mutate or replace the payload before it is sent.

export type ChatMessagePayload = Record<string, any>;

export type ChatMessageInterceptor = (
    chatId: string,
    payload: ChatMessagePayload
) => ChatMessagePayload | Promise<ChatMessagePayload>;

let interceptor: ChatMessageInterceptor | null = null;

export function registerChatMessageInterceptor(fn: ChatMessageInterceptor) {
    interceptor = fn;
}

export async function runChatMessageInterceptor(
    chatId: string,
    payload: ChatMessagePayload
): Promise<ChatMessagePayload> {
    if (!interceptor) return payload;
    const result = await interceptor(chatId, { ...payload });
    return result ?? payload;
}
