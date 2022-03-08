/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: test/_/presence/presence_proto3.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./presence_common";
import * as pb_1 from "google-protobuf";
export class PresenceMessageV3 extends pb_1.Message {
    #one_of_decls: number[][] = [[6], [7], [8], [9], [10]];
    constructor(data?: any[] | ({
        int32?: number;
        enum?: dependency_1.PresenceCommonEnum;
        string?: string;
        message?: dependency_1.PresenceCommonMessage;
        oneof?: dependency_1.PresenceCommonMessageOneOf;
        repeated?: number[];
        map?: Map<string, string>;
    } & (({
        opt_int32?: number;
    }) | ({
        opt_enum?: dependency_1.PresenceCommonEnum;
    }) | ({
        opt_string?: string;
    }) | ({
        opt_message?: dependency_1.PresenceCommonMessage;
    }) | ({
        opt_oneof?: dependency_1.PresenceCommonMessageOneOf;
    })))) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("int32" in data && data.int32 != undefined) {
                this.int32 = data.int32;
            }
            if ("enum" in data && data.enum != undefined) {
                this.enum = data.enum;
            }
            if ("string" in data && data.string != undefined) {
                this.string = data.string;
            }
            if ("message" in data && data.message != undefined) {
                this.message = data.message;
            }
            if ("oneof" in data && data.oneof != undefined) {
                this.oneof = data.oneof;
            }
            if ("opt_int32" in data && data.opt_int32 != undefined) {
                this.opt_int32 = data.opt_int32;
            }
            if ("opt_enum" in data && data.opt_enum != undefined) {
                this.opt_enum = data.opt_enum;
            }
            if ("opt_string" in data && data.opt_string != undefined) {
                this.opt_string = data.opt_string;
            }
            if ("opt_message" in data && data.opt_message != undefined) {
                this.opt_message = data.opt_message;
            }
            if ("opt_oneof" in data && data.opt_oneof != undefined) {
                this.opt_oneof = data.opt_oneof;
            }
            if ("repeated" in data && data.repeated != undefined) {
                this.repeated = data.repeated;
            }
            if ("map" in data && data.map != undefined) {
                this.map = data.map;
            }
        }
        if (!this.map)
            this.map = new Map();
    }
    get int32() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set int32(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get enum() {
        return pb_1.Message.getFieldWithDefault(this, 2, dependency_1.PresenceCommonEnum.ZERO) as dependency_1.PresenceCommonEnum;
    }
    set enum(value: dependency_1.PresenceCommonEnum) {
        pb_1.Message.setField(this, 2, value);
    }
    get string() {
        return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
    }
    set string(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get message() {
        return pb_1.Message.getWrapperField(this, dependency_1.PresenceCommonMessage, 4) as dependency_1.PresenceCommonMessage;
    }
    set message(value: dependency_1.PresenceCommonMessage) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    clear_message() {
        pb_1.Message.setField(this, 4, undefined);
    }
    has_message() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get oneof() {
        return pb_1.Message.getWrapperField(this, dependency_1.PresenceCommonMessageOneOf, 5) as dependency_1.PresenceCommonMessageOneOf;
    }
    set oneof(value: dependency_1.PresenceCommonMessageOneOf) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    clear_oneof() {
        pb_1.Message.setField(this, 5, undefined);
    }
    has_oneof() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get opt_int32() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set opt_int32(value: number) {
        pb_1.Message.setOneofField(this, 6, this.#one_of_decls[0], value);
    }
    clear_opt_int32() {
        pb_1.Message.setField(this, 6, undefined);
    }
    has_opt_int32() {
        return pb_1.Message.getField(this, 6) != null;
    }
    get opt_enum() {
        return pb_1.Message.getFieldWithDefault(this, 7, dependency_1.PresenceCommonEnum.ZERO) as dependency_1.PresenceCommonEnum;
    }
    set opt_enum(value: dependency_1.PresenceCommonEnum) {
        pb_1.Message.setOneofField(this, 7, this.#one_of_decls[1], value);
    }
    clear_opt_enum() {
        pb_1.Message.setField(this, 7, undefined);
    }
    has_opt_enum() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get opt_string() {
        return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
    }
    set opt_string(value: string) {
        pb_1.Message.setOneofField(this, 8, this.#one_of_decls[2], value);
    }
    clear_opt_string() {
        pb_1.Message.setField(this, 8, undefined);
    }
    has_opt_string() {
        return pb_1.Message.getField(this, 8) != null;
    }
    get opt_message() {
        return pb_1.Message.getWrapperField(this, dependency_1.PresenceCommonMessage, 9) as dependency_1.PresenceCommonMessage;
    }
    set opt_message(value: dependency_1.PresenceCommonMessage) {
        pb_1.Message.setOneofWrapperField(this, 9, this.#one_of_decls[3], value);
    }
    clear_opt_message() {
        pb_1.Message.setField(this, 9, undefined);
    }
    has_opt_message() {
        return pb_1.Message.getField(this, 9) != null;
    }
    get opt_oneof() {
        return pb_1.Message.getWrapperField(this, dependency_1.PresenceCommonMessageOneOf, 10) as dependency_1.PresenceCommonMessageOneOf;
    }
    set opt_oneof(value: dependency_1.PresenceCommonMessageOneOf) {
        pb_1.Message.setOneofWrapperField(this, 10, this.#one_of_decls[4], value);
    }
    clear_opt_oneof() {
        pb_1.Message.setField(this, 10, undefined);
    }
    has_opt_oneof() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get repeated() {
        return pb_1.Message.getFieldWithDefault(this, 11, []) as number[];
    }
    set repeated(value: number[]) {
        pb_1.Message.setField(this, 11, value);
    }
    get map() {
        return pb_1.Message.getField(this, 12) as any as Map<string, string>;
    }
    set map(value: Map<string, string>) {
        pb_1.Message.setField(this, 12, value as any);
    }
    get _opt_int32() {
        const cases: {
            [index: number]: "none" | "opt_int32";
        } = {
            0: "none",
            6: "opt_int32"
        };
        return cases[pb_1.Message.computeOneofCase(this, [6])];
    }
    get _opt_enum() {
        const cases: {
            [index: number]: "none" | "opt_enum";
        } = {
            0: "none",
            7: "opt_enum"
        };
        return cases[pb_1.Message.computeOneofCase(this, [7])];
    }
    get _opt_string() {
        const cases: {
            [index: number]: "none" | "opt_string";
        } = {
            0: "none",
            8: "opt_string"
        };
        return cases[pb_1.Message.computeOneofCase(this, [8])];
    }
    get _opt_message() {
        const cases: {
            [index: number]: "none" | "opt_message";
        } = {
            0: "none",
            9: "opt_message"
        };
        return cases[pb_1.Message.computeOneofCase(this, [9])];
    }
    get _opt_oneof() {
        const cases: {
            [index: number]: "none" | "opt_oneof";
        } = {
            0: "none",
            10: "opt_oneof"
        };
        return cases[pb_1.Message.computeOneofCase(this, [10])];
    }
    static fromObject(data: {
        int32?: number;
        enum?: dependency_1.PresenceCommonEnum;
        string?: string;
        message?: ReturnType<typeof dependency_1.PresenceCommonMessage.prototype.toObject>;
        oneof?: ReturnType<typeof dependency_1.PresenceCommonMessageOneOf.prototype.toObject>;
        opt_int32?: number;
        opt_enum?: dependency_1.PresenceCommonEnum;
        opt_string?: string;
        opt_message?: ReturnType<typeof dependency_1.PresenceCommonMessage.prototype.toObject>;
        opt_oneof?: ReturnType<typeof dependency_1.PresenceCommonMessageOneOf.prototype.toObject>;
        repeated?: number[];
        map?: {
            [key: string]: string;
        };
    }): PresenceMessageV3 {
        const message = new PresenceMessageV3({});
        if (data.int32 != null) {
            message.int32 = data.int32;
        }
        if (data.enum != null) {
            message.enum = data.enum;
        }
        if (data.string != null) {
            message.string = data.string;
        }
        if (data.message != null) {
            message.message = dependency_1.PresenceCommonMessage.fromObject(data.message);
        }
        if (data.oneof != null) {
            message.oneof = dependency_1.PresenceCommonMessageOneOf.fromObject(data.oneof);
        }
        if (data.opt_int32 != null) {
            message.opt_int32 = data.opt_int32;
        }
        if (data.opt_enum != null) {
            message.opt_enum = data.opt_enum;
        }
        if (data.opt_string != null) {
            message.opt_string = data.opt_string;
        }
        if (data.opt_message != null) {
            message.opt_message = dependency_1.PresenceCommonMessage.fromObject(data.opt_message);
        }
        if (data.opt_oneof != null) {
            message.opt_oneof = dependency_1.PresenceCommonMessageOneOf.fromObject(data.opt_oneof);
        }
        if (data.repeated != null) {
            message.repeated = data.repeated;
        }
        if (typeof data.map == "object") {
            message.map = new Map(Object.entries(data.map));
        }
        return message;
    }
    toObject() {
        const data: {
            int32?: number;
            enum?: dependency_1.PresenceCommonEnum;
            string?: string;
            message?: ReturnType<typeof dependency_1.PresenceCommonMessage.prototype.toObject>;
            oneof?: ReturnType<typeof dependency_1.PresenceCommonMessageOneOf.prototype.toObject>;
            opt_int32?: number;
            opt_enum?: dependency_1.PresenceCommonEnum;
            opt_string?: string;
            opt_message?: ReturnType<typeof dependency_1.PresenceCommonMessage.prototype.toObject>;
            opt_oneof?: ReturnType<typeof dependency_1.PresenceCommonMessageOneOf.prototype.toObject>;
            repeated?: number[];
            map?: {
                [key: string]: string;
            };
        } = {};
        if (this.int32 != null) {
            data.int32 = this.int32;
        }
        if (this.enum != null) {
            data.enum = this.enum;
        }
        if (this.string != null) {
            data.string = this.string;
        }
        if (this.message != null) {
            data.message = this.message.toObject();
        }
        if (this.oneof != null) {
            data.oneof = this.oneof.toObject();
        }
        if (this.opt_int32 != null) {
            data.opt_int32 = this.opt_int32;
        }
        if (this.opt_enum != null) {
            data.opt_enum = this.opt_enum;
        }
        if (this.opt_string != null) {
            data.opt_string = this.opt_string;
        }
        if (this.opt_message != null) {
            data.opt_message = this.opt_message.toObject();
        }
        if (this.opt_oneof != null) {
            data.opt_oneof = this.opt_oneof.toObject();
        }
        if (this.repeated != null) {
            data.repeated = this.repeated;
        }
        if (this.map.size > 0) {
            data.map = Object.fromEntries(this.map);
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.int32 != 0)
            writer.writeInt32(1, this.int32);
        if (this.enum != dependency_1.PresenceCommonEnum.ZERO)
            writer.writeEnum(2, this.enum);
        if (typeof pb_1.Message.getField(this, 3) === "string" && this.string.length)
            writer.writeString(3, this.string);
        if (pb_1.Message.getField(this, 4) != null)
            writer.writeMessage(4, this.message, () => this.message.serialize(writer));
        if (pb_1.Message.getField(this, 5) != null)
            writer.writeMessage(5, this.oneof, () => this.oneof.serialize(writer));
        if (pb_1.Message.getField(this, 6) != null)
            writer.writeInt32(6, this.opt_int32);
        if (pb_1.Message.getField(this, 7) != null)
            writer.writeEnum(7, this.opt_enum);
        if (typeof pb_1.Message.getField(this, 8) === "string" && this.opt_string.length)
            writer.writeString(8, this.opt_string);
        if (pb_1.Message.getField(this, 9) != null)
            writer.writeMessage(9, this.opt_message, () => this.opt_message.serialize(writer));
        if (pb_1.Message.getField(this, 10) != null)
            writer.writeMessage(10, this.opt_oneof, () => this.opt_oneof.serialize(writer));
        if (this.repeated.length)
            writer.writePackedInt32(11, this.repeated);
        for (const [key, value] of this.map) {
            writer.writeMessage(12, this.map, () => {
                writer.writeString(1, key);
                writer.writeString(2, value);
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PresenceMessageV3 {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PresenceMessageV3();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.int32 = reader.readInt32();
                    break;
                case 2:
                    message.enum = reader.readEnum();
                    break;
                case 3:
                    message.string = reader.readString();
                    break;
                case 4:
                    reader.readMessage(message.message, () => message.message = dependency_1.PresenceCommonMessage.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.oneof, () => message.oneof = dependency_1.PresenceCommonMessageOneOf.deserialize(reader));
                    break;
                case 6:
                    message.opt_int32 = reader.readInt32();
                    break;
                case 7:
                    message.opt_enum = reader.readEnum();
                    break;
                case 8:
                    message.opt_string = reader.readString();
                    break;
                case 9:
                    reader.readMessage(message.opt_message, () => message.opt_message = dependency_1.PresenceCommonMessage.deserialize(reader));
                    break;
                case 10:
                    reader.readMessage(message.opt_oneof, () => message.opt_oneof = dependency_1.PresenceCommonMessageOneOf.deserialize(reader));
                    break;
                case 11:
                    message.repeated = reader.readPackedInt32();
                    break;
                case 12:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.map as any, reader, reader.readString, reader.readString));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PresenceMessageV3 {
        return PresenceMessageV3.deserialize(bytes);
    }
}
