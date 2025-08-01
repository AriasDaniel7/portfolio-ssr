const fs = require("fs");
const path = require("path");

const serverNetlify = `import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(
  request: Request
): Promise<Response> {
  const context = getContext();

  // Example API endpoints can be defined here.
  // Uncomment and define endpoints as necessary.
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);`;

const serverFilePath = path.join(__dirname, "src/server.ts");

function deleteServerFile() {
  try {
    if (fs.existsSync(serverFilePath)) {
      fs.unlinkSync(serverFilePath);
      console.log("✅ Archivo server.ts eliminado exitosamente");
    } else {
      console.log("⚠️ El archivo server.ts no existe, no se puede eliminar");
    }
  } catch (error) {
    console.error("❌ Error al eliminar el archivo server.ts:", error);
  }
}

function updateServerFile() {
  try {
    // Crear el directorio src si no existe
    const srcDir = path.dirname(serverFilePath);
    if (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true });
    }

    // Escribir el contenido de serverNetlify al archivo
    fs.writeFileSync(serverFilePath, serverNetlify, "utf8");
    console.log("✅ Archivo server.ts actualizado exitosamente");
  } catch (error) {
    console.error("❌ Error al actualizar el archivo:", error.message);
  }
}

module.exports = {
  deleteServerFile,
  updateServerFile,
};

if (require.main === module) {
  deleteServerFile();
  updateServerFile();
}
