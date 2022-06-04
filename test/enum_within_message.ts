/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: test/_/enum_within_message.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace main {
    export class Code extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            language?: Code.Language;
            lines?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("language" in data && data.language != undefined) {
                    this.language = data.language;
                }
                if ("lines" in data && data.lines != undefined) {
                    this.lines = data.lines;
                }
            }
        }
        get language() {
            return pb_1.Message.getField(this, 1) as Code.Language;
        }
        set language(value: Code.Language) {
            pb_1.Message.setField(this, 1, value);
        }
        get lines() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set lines(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            language?: Code.Language;
            lines?: number;
        }): Code {
            const message = new Code({});
            if (data.language != null) {
                message.language = data.language;
            }
            if (data.lines != null) {
                message.lines = data.lines;
            }
            return message;
        }
        toObject() {
            const data: {
                language?: Code.Language;
                lines?: number;
            } = {};
            if (this.language != null) {
                data.language = this.language;
            }
            if (this.lines != null) {
                data.lines = this.lines;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.language !== undefined)
                writer.writeEnum(1, this.language);
            if (this.lines !== undefined)
                writer.writeInt32(2, this.lines);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Code {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Code();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.language = reader.readEnum();
                        break;
                    case 2:
                        message.lines = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Code {
            return Code.deserialize(bytes);
        }
    }
    export namespace Code {
        export enum Language {
            UNKNOWN = 0,
            C = 1,
            CPP = 2
        }
    }
}
