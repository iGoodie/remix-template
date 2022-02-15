import { LoaderFunction as RemixLoaderFunction } from "remix";
import { ActionFunction as RemixActionFunction } from "remix";

export interface LoaderFunction<T = any> {
  (args: Parameters<RemixLoaderFunction>[0]): Promise<T>;
}

export interface ActionFunction<T = any> {
  (args: Parameters<RemixActionFunction>[0]): Promise<T>;
}
