/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: plugin.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./descriptor";
import * as pb_1 from "google-protobuf";
export class Version extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        major?: number;
        minor?: number;
        patch?: number;
        suffix?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("major" in data && data.major != undefined) {
                this.major = data.major;
            }
            if ("minor" in data && data.minor != undefined) {
                this.minor = data.minor;
            }
            if ("patch" in data && data.patch != undefined) {
                this.patch = data.patch;
            }
            if ("suffix" in data && data.suffix != undefined) {
                this.suffix = data.suffix;
            }
        }
    }
    get major() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set major(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    clear_major() {
        pb_1.Message.setField(this, 1, undefined);
    }
    has_major() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get minor() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set minor(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    clear_minor() {
        pb_1.Message.setField(this, 2, undefined);
    }
    has_minor() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get patch() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set patch(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    clear_patch() {
        pb_1.Message.setField(this, 3, undefined);
    }
    has_patch() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get suffix() {
        return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
    }
    set suffix(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    clear_suffix() {
        pb_1.Message.setField(this, 4, undefined);
    }
    has_suffix() {
        return pb_1.Message.getField(this, 4) != null;
    }
    static fromObject(data: {
        major?: number;
        minor?: number;
        patch?: number;
        suffix?: string;
    }): Version {
        const message = new Version({});
        if (data.major != null) {
            message.major = data.major;
        }
        if (data.minor != null) {
            message.minor = data.minor;
        }
        if (data.patch != null) {
            message.patch = data.patch;
        }
        if (data.suffix != null) {
            message.suffix = data.suffix;
        }
        return message;
    }
    toObject() {
        const data: {
            major?: number;
            minor?: number;
            patch?: number;
            suffix?: string;
        } = {};
        if (this.major != null) {
            data.major = this.major;
        }
        if (this.minor != null) {
            data.minor = this.minor;
        }
        if (this.patch != null) {
            data.patch = this.patch;
        }
        if (this.suffix != null) {
            data.suffix = this.suffix;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (pb_1.Message.getField(this, 1) != null)
            writer.writeInt32(1, this.major);
        if (pb_1.Message.getField(this, 2) != null)
            writer.writeInt32(2, this.minor);
        if (pb_1.Message.getField(this, 3) != null)
            writer.writeInt32(3, this.patch);
        if (typeof pb_1.Message.getField(this, 4) === "string" && this.suffix.length)
            writer.writeString(4, this.suffix);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Version {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Version();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.major = reader.readInt32();
                    break;
                case 2:
                    message.minor = reader.readInt32();
                    break;
                case 3:
                    message.patch = reader.readInt32();
                    break;
                case 4:
                    message.suffix = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Version {
        return Version.deserialize(bytes);
    }
}
export class CodeGeneratorRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        file_to_generate: string[];
        parameter?: string;
        proto_file: dependency_1.FileDescriptorProto[];
        compiler_version?: Version;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            this.file_to_generate = data.file_to_generate;
            if ("parameter" in data && data.parameter != undefined) {
                this.parameter = data.parameter;
            }
            this.proto_file = data.proto_file;
            if ("compiler_version" in data && data.compiler_version != undefined) {
                this.compiler_version = data.compiler_version;
            }
        }
    }
    get file_to_generate() {
        return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
    }
    set file_to_generate(value: string[]) {
        pb_1.Message.setField(this, 1, value);
    }
    get parameter() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set parameter(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    clear_parameter() {
        pb_1.Message.setField(this, 2, undefined);
    }
    has_parameter() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get proto_file() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.FileDescriptorProto, 15) as dependency_1.FileDescriptorProto[];
    }
    set proto_file(value: dependency_1.FileDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    get compiler_version() {
        return pb_1.Message.getWrapperField(this, Version, 3) as Version;
    }
    set compiler_version(value: Version) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    clear_compiler_version() {
        pb_1.Message.setField(this, 3, undefined);
    }
    has_compiler_version() {
        return pb_1.Message.getField(this, 3) != null;
    }
    static fromObject(data: {
        file_to_generate: string[];
        parameter?: string;
        proto_file?: ReturnType<typeof dependency_1.FileDescriptorProto.prototype.toObject>[];
        compiler_version?: ReturnType<typeof Version.prototype.toObject>;
    }): CodeGeneratorRequest {
        const message = new CodeGeneratorRequest({
            file_to_generate: data.file_to_generate,
            proto_file: data.proto_file.map(item => dependency_1.FileDescriptorProto.fromObject(item))
        });
        if (data.parameter != null) {
            message.parameter = data.parameter;
        }
        if (data.compiler_version != null) {
            message.compiler_version = Version.fromObject(data.compiler_version);
        }
        return message;
    }
    toObject() {
        const data: {
            file_to_generate: string[];
            parameter?: string;
            proto_file?: ReturnType<typeof dependency_1.FileDescriptorProto.prototype.toObject>[];
            compiler_version?: ReturnType<typeof Version.prototype.toObject>;
        } = {
            file_to_generate: this.file_to_generate
        };
        if (this.parameter != null) {
            data.parameter = this.parameter;
        }
        if (this.proto_file != null) {
            data.proto_file = this.proto_file.map((item: dependency_1.FileDescriptorProto) => item.toObject());
        }
        if (this.compiler_version != null) {
            data.compiler_version = this.compiler_version.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.file_to_generate.length)
            writer.writeRepeatedString(1, this.file_to_generate);
        if (typeof pb_1.Message.getField(this, 2) === "string" && this.parameter.length)
            writer.writeString(2, this.parameter);
        if (this.proto_file.length)
            writer.writeRepeatedMessage(15, this.proto_file, (item: dependency_1.FileDescriptorProto) => item.serialize(writer));
        if (pb_1.Message.getField(this, 3) != null)
            writer.writeMessage(3, this.compiler_version, () => this.compiler_version.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CodeGeneratorRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CodeGeneratorRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                    break;
                case 2:
                    message.parameter = reader.readString();
                    break;
                case 15:
                    reader.readMessage(message.proto_file, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.FileDescriptorProto.deserialize(reader), dependency_1.FileDescriptorProto));
                    break;
                case 3:
                    reader.readMessage(message.compiler_version, () => message.compiler_version = Version.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CodeGeneratorRequest {
        return CodeGeneratorRequest.deserialize(bytes);
    }
}
export class CodeGeneratorResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        error?: string;
        supported_features?: number;
        file: CodeGeneratorResponse.File[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("error" in data && data.error != undefined) {
                this.error = data.error;
            }
            if ("supported_features" in data && data.supported_features != undefined) {
                this.supported_features = data.supported_features;
            }
            this.file = data.file;
        }
    }
    get error() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set error(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    clear_error() {
        pb_1.Message.setField(this, 1, undefined);
    }
    has_error() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get supported_features() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set supported_features(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    clear_supported_features() {
        pb_1.Message.setField(this, 2, undefined);
    }
    has_supported_features() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get file() {
        return pb_1.Message.getRepeatedWrapperField(this, CodeGeneratorResponse.File, 15) as CodeGeneratorResponse.File[];
    }
    set file(value: CodeGeneratorResponse.File[]) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    static fromObject(data: {
        error?: string;
        supported_features?: number;
        file?: ReturnType<typeof CodeGeneratorResponse.File.prototype.toObject>[];
    }): CodeGeneratorResponse {
        const message = new CodeGeneratorResponse({
            file: data.file.map(item => CodeGeneratorResponse.File.fromObject(item))
        });
        if (data.error != null) {
            message.error = data.error;
        }
        if (data.supported_features != null) {
            message.supported_features = data.supported_features;
        }
        return message;
    }
    toObject() {
        const data: {
            error?: string;
            supported_features?: number;
            file?: ReturnType<typeof CodeGeneratorResponse.File.prototype.toObject>[];
        } = {};
        if (this.error != null) {
            data.error = this.error;
        }
        if (this.supported_features != null) {
            data.supported_features = this.supported_features;
        }
        if (this.file != null) {
            data.file = this.file.map((item: CodeGeneratorResponse.File) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof pb_1.Message.getField(this, 1) === "string" && this.error.length)
            writer.writeString(1, this.error);
        if (pb_1.Message.getField(this, 2) != null)
            writer.writeUint64(2, this.supported_features);
        if (this.file.length)
            writer.writeRepeatedMessage(15, this.file, (item: CodeGeneratorResponse.File) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CodeGeneratorResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CodeGeneratorResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.error = reader.readString();
                    break;
                case 2:
                    message.supported_features = reader.readUint64();
                    break;
                case 15:
                    reader.readMessage(message.file, () => pb_1.Message.addToRepeatedWrapperField(message, 15, CodeGeneratorResponse.File.deserialize(reader), CodeGeneratorResponse.File));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CodeGeneratorResponse {
        return CodeGeneratorResponse.deserialize(bytes);
    }
}
export namespace CodeGeneratorResponse {
    export enum Feature {
        FEATURE_NONE = 0,
        FEATURE_PROTO3_OPTIONAL = 1
    }
    export class File extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            insertion_point?: string;
            content?: string;
            generated_code_info?: dependency_1.GeneratedCodeInfo;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("insertion_point" in data && data.insertion_point != undefined) {
                    this.insertion_point = data.insertion_point;
                }
                if ("content" in data && data.content != undefined) {
                    this.content = data.content;
                }
                if ("generated_code_info" in data && data.generated_code_info != undefined) {
                    this.generated_code_info = data.generated_code_info;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        clear_name() {
            pb_1.Message.setField(this, 1, undefined);
        }
        has_name() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get insertion_point() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set insertion_point(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        clear_insertion_point() {
            pb_1.Message.setField(this, 2, undefined);
        }
        has_insertion_point() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get content() {
            return pb_1.Message.getFieldWithDefault(this, 15, "") as string;
        }
        set content(value: string) {
            pb_1.Message.setField(this, 15, value);
        }
        clear_content() {
            pb_1.Message.setField(this, 15, undefined);
        }
        has_content() {
            return pb_1.Message.getField(this, 15) != null;
        }
        get generated_code_info() {
            return pb_1.Message.getWrapperField(this, dependency_1.GeneratedCodeInfo, 16) as dependency_1.GeneratedCodeInfo;
        }
        set generated_code_info(value: dependency_1.GeneratedCodeInfo) {
            pb_1.Message.setWrapperField(this, 16, value);
        }
        clear_generated_code_info() {
            pb_1.Message.setField(this, 16, undefined);
        }
        has_generated_code_info() {
            return pb_1.Message.getField(this, 16) != null;
        }
        static fromObject(data: {
            name?: string;
            insertion_point?: string;
            content?: string;
            generated_code_info?: ReturnType<typeof dependency_1.GeneratedCodeInfo.prototype.toObject>;
        }): File {
            const message = new File({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.insertion_point != null) {
                message.insertion_point = data.insertion_point;
            }
            if (data.content != null) {
                message.content = data.content;
            }
            if (data.generated_code_info != null) {
                message.generated_code_info = dependency_1.GeneratedCodeInfo.fromObject(data.generated_code_info);
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                insertion_point?: string;
                content?: string;
                generated_code_info?: ReturnType<typeof dependency_1.GeneratedCodeInfo.prototype.toObject>;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.insertion_point != null) {
                data.insertion_point = this.insertion_point;
            }
            if (this.content != null) {
                data.content = this.content;
            }
            if (this.generated_code_info != null) {
                data.generated_code_info = this.generated_code_info.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof pb_1.Message.getField(this, 1) === "string" && this.name.length)
                writer.writeString(1, this.name);
            if (typeof pb_1.Message.getField(this, 2) === "string" && this.insertion_point.length)
                writer.writeString(2, this.insertion_point);
            if (typeof pb_1.Message.getField(this, 15) === "string" && this.content.length)
                writer.writeString(15, this.content);
            if (pb_1.Message.getField(this, 16) != null)
                writer.writeMessage(16, this.generated_code_info, () => this.generated_code_info.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): File {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new File();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.insertion_point = reader.readString();
                        break;
                    case 15:
                        message.content = reader.readString();
                        break;
                    case 16:
                        reader.readMessage(message.generated_code_info, () => message.generated_code_info = dependency_1.GeneratedCodeInfo.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): File {
            return File.deserialize(bytes);
        }
    }
}
