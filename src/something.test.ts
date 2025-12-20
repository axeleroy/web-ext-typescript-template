// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { doSomething } from "./something";

describe("doSomething", () => {
    it("should return the input string", () => {
        // GIVEN
        const input = "foo";

        // WHEN
        const result = doSomething(input);

        // THEN
        expect(result).toBe(input);
    });
});
