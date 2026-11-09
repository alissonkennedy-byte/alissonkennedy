import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
const html = readFileSync("index.html", "utf8");
describe("regras do site", () => {
  it("title até 60 caracteres", () => { expect(html.match(/<title>(.*?)<\/title>/)![1].length).toBeLessThanOrEqual(60); });
  it("description até 155 caracteres", () => { expect(html.match(/name="description" content="(.*?)"/)![1].length).toBeLessThanOrEqual(155); });
  it("um único H1", () => { expect(html.match(/<h1/g)!.length).toBe(1); });
  it("GTM sem duplicar", () => { expect(html.match(/gtm\.js\?id=/g)!.length).toBe(1); });
  it("WhatsApp correto", () => { expect(html).toContain("https://wa.me/5511967385924"); expect(html).not.toContain("5511934698384"); });
  it("termos proibidos ausentes", () => { for (const t of ["Virtus", "Wendell", "1 milhão", "400 mil", "energia", "Energia", "óculos", "Hive", "Legacy"]) expect(html).not.toContain(t); });
  it("case não chama resultado de lucro", () => { expect(html).toContain("R$ 96 mil"); expect(html).toContain("R$ 100 mil"); expect(html).toContain("Não houve lucro"); });
  it("PDF referenciado existe", () => { expect(existsSync("public/Alisson_Kennedy.pdf")).toBe(true); });
});
