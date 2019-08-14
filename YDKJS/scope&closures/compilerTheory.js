/**
 * In general terms, Javascript complies before executing in
 * 3 steps:
 * 
 *  1. Tokenizing/Lexing - the stream of code splits on tokens,
 *      like var a = 2; is ['var', 'a', '=', '2', ';']
 *  2. Takes a stream of tokens and transforms it
 *      to a AST (Abstract Syntax Tree)
 *  3. Code generation - Transforming AST to machine instructions
 *      and creating the a variable physically
 */

/**
 * "The Cast" of prgramm execution:
 * 
 *  1. Engine - compilation from start to end
 *  2. Complier - parsing/code generation
 *  3. Scope - collects and maintains a look-up list
 *      of all declared identifiers(variables) and
 *      enforces strict set of rules as to how these are
 *      accesible to currently executing code
 */