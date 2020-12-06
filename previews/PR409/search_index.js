var documenterSearchIndex = {"docs":
[{"location":"chunk_options/#chunk-options","page":"Chunk Options","title":"Chunk Options","text":"","category":"section"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"You can use chunk options to configure how each chunk is evaluated, rendered, etc. Most of the ideas came from chunk options in RMarkdown.","category":"page"},{"location":"chunk_options/#Syntax","page":"Chunk Options","title":"Syntax","text":"","category":"section"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"Chunk options come after code chunk header. There are two (slightly) different syntax to write them:","category":"page"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"(Julia's toplevel expression) options are separated by semicolon (;)\n(RMarkdown style) options are separated by comma (,)","category":"page"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"Let's take a look at examples. All the following code chunk header are valid, and so configured to hide the source code from generated output (echo = false) and displays figures with 12cm width (out_width = \"12cm\"):","category":"page"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":" ```julia; echo = false; out_width = \"12cm\"\n\n ```{julia; echo = false; out_width = \"12cm\"}\n\n ```julia, echo = false, out_width = \"12cm\"\n\n ```{julia, echo = false, out_width = \"12cm\"}","category":"page"},{"location":"chunk_options/#Weave-Chunk-Options","page":"Chunk Options","title":"Weave Chunk Options","text":"","category":"section"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"Weave currently supports the following chunk options: we've mostly followed RMarkdown's namings, but not all options are implemented.","category":"page"},{"location":"chunk_options/#Evaluation","page":"Chunk Options","title":"Evaluation","text":"","category":"section"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"eval = true: Evaluate the code chunk. If false the chunk won’t be executed.\nerror = true: If true weave won't stop on errors and rather they will be included in output document. If false, weave will halt on any of un-caught errors.\ncache = false: Cache results, depending on cache parameter on weave function.\ntangle = true: Set tangle to false to exclude chunk from tangled code.","category":"page"},{"location":"chunk_options/#Rendering","page":"Chunk Options","title":"Rendering","text":"","category":"section"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"echo = true: Echo the code in the output document. If false the source code will be hidden.\nresults = \"markup\": The output format of the printed results. \"markup\" for literal block, \"hidden\" for hidden results, or anything else for raw output (I tend to use \"tex\" for Latex and \"rst\" for rest). Raw output is useful if you want to e.g. create tables from code chunks.\nterm = false: If true the output emulates a REPL session. Otherwise only stdout and figures will be included in output.\nwrap = true: Wrap long lines from output.\nline_width = 75: Line width for wrapped lines.\nhold = false: Hold all results until the end of the chunk.","category":"page"},{"location":"chunk_options/#Figures","page":"Chunk Options","title":"Figures","text":"","category":"section"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"label = nothing: Chunk label, will be used for figure labels in Latex as fig:label.\nfig_width = 6: Figure width passed to plotting library.\nfig_height = 4: Figure height passed to plotting library.\nout_width: Width of saved figure in output markup e.g. \"50%\", \"12cm\", 0.5\\linewidth\nout_height: Height of saved figure in output markup\ndpi = 96: Resolution of saved figures.\nfig_cap: Figure caption.\nfig_ext: File extension (format) of saved figures.\nfig_pos = \"!h\": Figure position in Latex, e.g.: \"ht\".\nfig_env = \"figure\": Figure environment in Latex.","category":"page"},{"location":"chunk_options/#Default-Chunk-Options","page":"Chunk Options","title":"Default Chunk Options","text":"","category":"section"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"You can set the default chunk options (and weave arguments) for a document using weave_options key in YAML Header Configuration. E.g. to set the default out_width of all figures you can use:","category":"page"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"---\nweave_options:\n  out_width : 50%\n---","category":"page"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"You can also set or change the default chunk options for a document either before weave using the set_chunk_defaults function.","category":"page"},{"location":"chunk_options/","page":"Chunk Options","title":"Chunk Options","text":"set_chunk_defaults!\nget_chunk_defaults\nrestore_chunk_defaults!","category":"page"},{"location":"chunk_options/#Weave.set_chunk_defaults!","page":"Chunk Options","title":"Weave.set_chunk_defaults!","text":"set_chunk_defaults!(k, v)\nset_chunk_defaults!(kv::Pair...)\nset_chunk_defaults!(opts::AbstractDict)\n\nSet default options for code chunks, use get_chunk_defaults to see the current values.\n\nE.g.: all the three examples below will set default dpi to 200 and fig_width to 8:\n\nset_chunk_defaults!(:dpi, 200); set_chunk_defaults!(:fig_width, 8)\nset_chunk_defaults!(:dpi => 200, :fig_width => 8)\nset_chunk_defaults!(Dict(:dpi => 200, :fig_width => 8))\n\n\n\n\n\n","category":"function"},{"location":"chunk_options/#Weave.get_chunk_defaults","page":"Chunk Options","title":"Weave.get_chunk_defaults","text":"get_chunk_defaults()\n\nGet default options used for code chunks.\n\n\n\n\n\n","category":"function"},{"location":"chunk_options/#Weave.restore_chunk_defaults!","page":"Chunk Options","title":"Weave.restore_chunk_defaults!","text":"restore_chunk_defaults!()\n\nRestore Weave.jl default chunk options.\n\n\n\n\n\n","category":"function"},{"location":"header/#Header-Configuration","page":"Header Configuration","title":"Header Configuration","text":"","category":"section"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"When weaveing a markdown document, you use YAML header to provide additional metadata and configuration options. A YAML header should be in the beginning of the input document delimited with ---.","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"warning: Warning\nYAML header configuration is only supported when weaveing markdown or Noweb syntax documents.","category":"page"},{"location":"header/#Document-Metadata","page":"Header Configuration","title":"Document Metadata","text":"","category":"section"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"You can set additional document metadata in YAML header. When weaveing to Julia markdown documents to HTML or PDF, Weave respects the following metadata specification:","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"title\nauthor\ndate","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"An example:","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"---\ntitle : Header Example\nauthor : Shuhei Kadowaki\ndate: 16th May 2020\n---","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"note: Note\nYou can also have other metadata, but they won't appear in the resulting HTML and PDF. If you weave to Julia markdown to GitHub/Hugo markdown, all the metadata will be preserved.","category":"page"},{"location":"header/#Dynamic-Metadata","page":"Header Configuration","title":"Dynamic Metadata","text":"","category":"section"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"The metadata can be given \"dynamically\"; if you have inline code within YAML header, they will be evaluated after evaluating all the chunks and replaced with the results.","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"The example document below will set date metadata dynamically. Note that Date is available since the chunk is evaluated first.","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":" ---\n title : Header Example\n author : Shuhei Kadowaki\n date: `j import Dates; Dates.Date(Dates.now())`\n ---\n\n ```julia; echo = false\n using Dates\n ```","category":"page"},{"location":"header/#Configuration-Options","page":"Header Configuration","title":"Configuration Options","text":"","category":"section"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"Each of keyword arguments of weave can be set in the YAML header under options field. You can also set Chunks Options there that will be applied globally.","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"The example below sets out_path and doctype options and overwrites term and wrap chunk options:","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"---\ntitle : Header Example\nauthor : Shuhei Kadowaki\ndate: 16th May 2020\nweave_options:\n  out_path: relative/path/to/this/document\n  doctype: github\n  term: true\n  wrap: false\n---","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"note: Note\nconfigurations specified within the YAML header have higher precedence than those specified via weave keyword arguments\nchunk options specified within each chunk have higher precedence than the global global chunk options specified within the YAML header","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"warning: Warning\nAs opposed to metadata, most of those configuration options can't be given dynamically (i.e. can't be via inline code), since they are needed for evaluation of chunks themselves. But some configuration options that are needed \"formatting\" document can still be given dynamically:template\ncss\nhighlight_theme\npandoc_options\nlatex_cmd\nkeep_unicodeSee also: weave","category":"page"},{"location":"header/#Format-Specific-Options","page":"Header Configuration","title":"Format Specific Options","text":"","category":"section"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"The header configurations can be format specific. Here is how to set different out_path for md2html and md2pdf and set fig_ext globally:","category":"page"},{"location":"header/","page":"Header Configuration","title":"Header Configuration","text":"---\nweave_options:\n  md2html:\n    out_path : html\n  md2pdf:\n    out_path : pdf\n  fig_ext : .png\n---","category":"page"},{"location":"publish/#Publishing-to-HTML-and-PDF","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"","category":"section"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can also publish any supported input format to HTML and PDF documents.","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"note: Note\nProducing PDF output requires that you have XeLaTex installed and in your path.","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can use a YAML header in the beginning of the input document delimited with --- to set the document title, author and date, e.g.:","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"---\ntitle : Weave example\nauthor : Matti Pastell\ndate: 15th December 2016\n---","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"Here are sample input and outputs:","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"input (Julia markdown format): FIR_design_plots.jl (its path is bound to Weave.SAMPLE_JL_DOC)\nHTML output: FIR_design_plots.html\nPDF output: FIR_design_plots.pdf","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"They are generated as follows:","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"weave(Weave.SAMPLE_JL_DOC)) # default to md2html output format\nweave(Weave.SAMPLE_JL_DOC; doctype = \"md2pdf\")","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"tips: Tips\nWeave.SAMPLE_JL_DOC is the path of FIR_design.jl.","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"note: Note\n\"md2html\" and \"md2pdf\" assume Julia markdown format as an input, while pandoc2pdf and pandoc2html assume Noweb input format (i.e. Pandoc markdown).","category":"page"},{"location":"publish/#Templates","page":"Publishing to HTML and PDF","title":"Templates","text":"","category":"section"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can use a custom template with md2html and md2pdf formats with template keyword option, e.g.: weave(\"FIR_design_plots.jl\", template = \"custom.tpl\".","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"As starting point, you can use the existing templates:","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"HTML (md2html): md2html.tpl\nLaTex (md2pdf): md2pdf.tpl","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"Templates are rendered using Mustache.jl.","category":"page"},{"location":"publish/#Supported-Markdown-syntax","page":"Publishing to HTML and PDF","title":"Supported Markdown syntax","text":"","category":"section"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"The markdown variant used by Weave is Julia markdown. In addition Weave supports few additional Markdown features:","category":"page"},{"location":"publish/#Comments","page":"Publishing to HTML and PDF","title":"Comments","text":"","category":"section"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can add comments using html syntax: <!-- -->","category":"page"},{"location":"publish/#Multiline-equations","page":"Publishing to HTML and PDF","title":"Multiline equations","text":"","category":"section"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can add multiline equations using:","category":"page"},{"location":"publish/","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"$$\nx^2 = x*x\n$$","category":"page"},{"location":"usage/#Using-Weave","page":"Using Weave","title":"Using Weave","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"You can write your documentation and code in input document using Markdown, Noweb or script syntax and use weave function to execute to document to capture results and figures.","category":"page"},{"location":"usage/#weave","page":"Using Weave","title":"weave","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Weave document with markup and julia code using Plots.jl for plots, out_path = :pwd makes the results appear in the current working directory.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"A prepared example: Weave.SAMPLE_JL_DOC","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"# First add depencies for the example\nusing Pkg; Pkg.add.([\"Plots\", \"DSP\"])\nusing Weave\nweave(Weave.SAMPLE_JL_DOC; out_path=:pwd)","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"weave","category":"page"},{"location":"usage/#Weave.weave","page":"Using Weave","title":"Weave.weave","text":"weave(source::AbstractString; kwargs...)\n\nWeave an input document to output file.\n\nKeyword options\n\ndoctype::Union{Nothing,AbstractString} = nothing: Output document format. By default (i.e. given nothing), Weave will set it automatically based on file extension. You can also manually specify it; see list_out_formats() for the supported formats\ninformat::Union{Nothing,AbstractString} = nothing: Input document format. By default (i.e. given nothing), Weave will set it automatically based on file extension. You can also specify either of \"script\", \"markdown\", \"notebook\", or \"noweb\"\nout_path::Union{Symbol,AbstractString} = :doc: Path where the output is generated can be either of:\n:doc: Path of the source document (default)\n:pwd: Julia working directory\n\"somepath\": String of output directory e.g. \"~/outdir\", or of filename e.g. \"~/outdir/outfile.tex\"\nargs::Any = Dict(): A runtime object that is available as WEAVE_ARGS while weaveing\nmod::Union{Module,Nothing} = nothing: Module where Weave evals code. You can pass a Module object, otherwise create an new sandbox module.\nfig_path::Union{Nothing,AbstractString} = nothing: Where figures will be generated, relative to out_path. By default (i.e. given nothing), Weave will automatically create figures directory.\nfig_ext::Union{Nothing,AbstractString} = nothing: Extension for saved figures e.g. \".pdf\", \".png\". Default setting depends on doctype\ncache_path::AbstractString = \"cache\": Where of cached output will be saved\ncache::Symbol = :off: Controls caching of code:\n:off means no caching (default)\n:all caches everything\n:user caches based on chunk options\n:refresh runs all code chunks and save new cache\ntemplate::Union{Nothing,AbstractString,Mustache.MustacheTokens} = nothing: Template (file path) or Mustache.MustacheTokenss for md2html or md2tex formats\ncss::Union{Nothing,AbstractString} = nothing: Path of a CSS file used for md2html format\nhighlight_theme::Union{Nothing,Type{<:Highlights.AbstractTheme}} = nothing: Theme used for syntax highlighting (defaults to Highlights.Themes.DefaultTheme)\npandoc_options::Vector{<:AbstractString} = String[]: Strings of options to pass to pandoc for pandoc2html and pandoc2pdf formats, e.g. [\"--toc\", \"-N\"]\nlatex_cmd::Vector{<:AbstractString} = [\"xelatex\", \"-shell-escape\", \"-halt-on-error\"]: The command used to make PDF file from .tex\nkeep_unicode::Bool = false: If true, do not convert unicode characters to their respective latex representation. This is especially useful if a font and tex-engine with support for unicode characters are used\n\nnote: Note\nRun Weave from terminal and try to avoid weaving from IJulia or ESS; they tend to mess with capturing output.\n\n\n\n\n\n","category":"function"},{"location":"usage/#tangle","page":"Using Weave","title":"tangle","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Tangling extracts the code from document:","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"tangle","category":"page"},{"location":"usage/#Weave.tangle","page":"Using Weave","title":"Weave.tangle","text":"tangle(source::AbstractString; kwargs...)\n\nTangle source code from input document to .jl file.\n\nKeyword options\n\ninformat::Union{Nothing,AbstractString} = nothing: Input document format. By default (i.e. given nothing), Weave will set it automatically based on file extension. You can also specify either of \"script\", \"markdown\", \"notebook\", or \"noweb\"\nout_path::Union{Symbol,AbstractString} = :doc: Path where the output is generated can be either of:\n:doc: Path of the source document (default)\n:pwd: Julia working directory\n\"somepath\": String of output directory e.g. \"~/outdir\", or of filename e.g. \"~/outdir/outfile.tex\"\n\n\n\n\n\n","category":"function"},{"location":"usage/#Supported-Output-Formats","page":"Using Weave","title":"Supported Output Formats","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Weave automatically detects the output format based on the file extension. The auto output format detection is handled by detect_doctype(path::AbstractString):","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"function detect_doctype(path::AbstractString)\n    _, ext = lowercase.(splitext(path))\n\n    match(r\"^\\.(jl|.?md|ipynb)\", ext) !== nothing && return \"md2html\"\n    ext == \".rst\" && return \"rst\"\n    ext == \".tex\" && return \"texminted\"\n    ext == \".txt\"  && return \"asciidoc\"\n\n    return \"pandoc\"\nend","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"You can also manually specify it using the doctype keyword option. You can get a list of supported output formats:","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"list_out_formats","category":"page"},{"location":"usage/#Weave.list_out_formats","page":"Using Weave","title":"Weave.list_out_formats","text":"list_out_formats()\n\nList supported output formats with its description.\n\n\n\n\n\n","category":"function"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"using Weave # hide\nlist_out_formats()","category":"page"},{"location":"usage/#document-syntax","page":"Using Weave","title":"Document Syntax","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Weave uses markdown, Noweb or script syntax for defining the code chunks and documentation chunks. You can also weave Jupyter notebooks. The format is detected based on the file extension, but you can also set it manually using the informat parameter.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"The rules for autodetection are:","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"ext == \".jl\" && return \"script\"\next == \".jmd\" && return \"markdown\"\next == \".ipynb\" && return \"notebook\"\nreturn \"noweb\"","category":"page"},{"location":"usage/#Documentation-Chunks","page":"Using Weave","title":"Documentation Chunks","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"In markdown and Noweb input formats documentation chunks are the parts that aren't inside code delimiters. Documentation chunks can be written with several different markup languages.","category":"page"},{"location":"usage/#code-chunks","page":"Using Weave","title":"Code Chunks","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Code chunks are written in different ways in different formats.","category":"page"},{"location":"usage/#Markdown-Format","page":"Using Weave","title":"Markdown Format","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Weave code chunks are defined using fenced code blocks, same as with common markdown:","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":" ```julia\n code\n ...\n ```","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Weave code chunks can optionally be followed by chunk options on the same line. E.g. the chunk below will hide code itself from generated output:","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":" ```julia, echo = false\n code\n ...\n ```","category":"page"},{"location":"usage/#Noweb-Format","page":"Using Weave","title":"Noweb Format","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Code chunks start with a line marked with <<>>= or <<options>>= and end with line marked with @. The code between the start and end markers is executed and the output is captured to the output document.","category":"page"},{"location":"usage/#inline-code","page":"Using Weave","title":"Inline Code","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"You can also add inline code to your documents using","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"`j juliacode`","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"or","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"! juliacode","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"syntax.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"The former syntax allows you to insert code anywhere in a line while the ! syntax treats the whole line as code, and the code will be replaced with captured output in the weaved document.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"If the code produces figures, the filename or base64 encoded string will be added to output, e.g. to include a Plots figure in markdown you can use:","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"![A plot](`j plot(1:10)`)","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"or to produce any HTML output:","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"! display(\"text/html\", \"Header from julia\");","category":"page"},{"location":"usage/#Script-Format","page":"Using Weave","title":"Script Format","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Weave also supports script input format with a markup in comments. These scripts can be executed normally using Julia or published with Weave.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"Lines starting with #', #%% or # %% are treated as document.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"All non-document lines are treated as code. You can set chunk options using lines starting with #+ just before code e.g:","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"#+ term=true\nhoge # some code comes here","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"The format is identical to Pweave and the concept is similar to publishing documents with MATLAB or using Knitr's spin. Weave will remove the first empty space from each line of documentation.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"tip: Tip\nHere are sample documents:\nmarkdown format\nscript format\nDetails about chunk options","category":"page"},{"location":"usage/#Configuration-via-YAML-Header","page":"Using Weave","title":"Configuration via YAML Header","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"When weaveing markdown files, you can use YAML header to provide additional metadata and configuration options. See Header Configuration section for more details.","category":"page"},{"location":"usage/#Passing-Runtime-Arguments-to-Documents","page":"Using Weave","title":"Passing Runtime Arguments to Documents","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"You can pass arbitrary object to the weaved document using weave's optional argument args. It will be available as WEAVE_ARGS variable in the weaved document.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"This makes it possible to create the same report easily for e.g. different date ranges of input data from a database or from files with similar format giving the filename as input.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"E.g. if you call weave(\"weavefile.jmd\", args = (datalocation = \"somedata.h5\",)), and then you can retrieve the datalocation in weavefile.jmd as follows: WEAVE_ARGS.datalocation","category":"page"},{"location":"usage/#include_weave","page":"Using Weave","title":"include_weave","text":"","category":"section"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"You can call include_weave on a Weave document and run all code chunks within in the current session.","category":"page"},{"location":"usage/","page":"Using Weave","title":"Using Weave","text":"include_weave","category":"page"},{"location":"usage/#Weave.include_weave","page":"Using Weave","title":"Weave.include_weave","text":"include_weave(source::AbstractString, informat::Union{Nothing,AbstractString} = nothing)\ninclude_weave(m::Module, source::AbstractString, informat::Union{Nothing,AbstractString} = nothing)\n\nInclude code from Weave document calling include_string on all code from doc. Code is run in the path of the include document.\n\n\n\n\n\n","category":"function"},{"location":"getting_started/#Getting-started","page":"Getting started","title":"Getting started","text":"","category":"section"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"The best way to get started using Weave.jl is to look at the example input and output documents. Examples for different formats are included in the package's examples directory.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"First have a look at source document using markdown code chunks and Plots.jl for figures:","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"All the different format documents below are generated from a single Weave document FIR_design.jmd:","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"HTML: FIR_design.html\nPDF: FIR_design.pdf\nPandoc markdown: FIR_design.txt","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"note: Note\nProducing PDF output requires that you have XeLateX installed.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Add dependencies for the example if needed:","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"using Pkg; Pkg.add.([\"Plots\", \"DSP\"])","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Weave the files to your working directory:","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"using Weave\n\nfilename = normpath(Weave.EXAMPLE_FOLDER, \"FIR_design.jmd\")\n\n# Julia markdown to HTML\nweave(filename; doctype = \"md2html\", out_path = :pwd)\n\n# Julia markdown to PDF\nweave(filename; doctype = \"md2pdf\", out_path = :pwd)\n\n# Julia markdown to Pandoc markdown\nweave(filename; doctype = \"pandoc\", out_path = :pwd)","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"tips: Tips\nWeave.EXAMPLE_FOLDER points to the examples directory.","category":"page"},{"location":"notebooks/#Working-with-Jupyter-notebooks","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/#Weaving-from-Jupyter-notebooks","page":"Working with Jupyter notebooks","title":"Weaving from Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"Weave supports using Jupyter Notebooks as input format. This means you can weave notebooks to any supported formats; by default, it will be weaved to HTML.","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"weave(\"notebook.ipynb\") # will be weaved to HTML","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"warning: Warning\nYou can't use chunk options with notebooks.","category":"page"},{"location":"notebooks/#Output-to-Jupyter-notebooks","page":"Working with Jupyter notebooks","title":"Output to Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"As of Weave 0.5.1. there is new notebook method to convert Weave documents to Jupyter notebooks using nbconvert.","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"notebook","category":"page"},{"location":"notebooks/#Weave.notebook","page":"Working with Jupyter notebooks","title":"Weave.notebook","text":"notebook(source::AbstractString; kwargs...)\n\nConvert Weave document source to Jupyter Notebook and execute the code using nbconvert. Ignores all chunk options.\n\nKeyword options\n\nout_path::Union{Symbol,AbstractString} = :pwd: Path where the output is generated can be either of:\n:doc: Path of the source document\n:pwd: Julia working directory (default)\n\"somepath\": String of output directory e.g. \"~/outdir\", or of filename e.g. \"~/outdir/outfile.tex\"\ntimeout = -1: nbconvert cell timeout in seconds. Defaults to -1 (no timeout)\nnbconvert_options::AbstractString = \"\": String of additional options to pass to nbconvert, such as \"--allow-errors\"\njupyter_path::AbstractString = \"jupyter\": Path/command for the Jupyter you want to use. Defaults to \"jupyter\", which runs whatever is linked/alias to that\n\nwarning: Warning\nThe code is not executed by Weave, but by nbconvert. This means that the output doesn't necessarily always work properly; see #116.\n\nnote: Note\nIn order to just convert Weave document to Jupyter Notebook, use convert_doc instead.\n\n\n\n\n\n","category":"function"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"You can specify jupyter used to execute the notebook with the jupyter_path keyword argument (this defaults to the \"jupyter\", i.e. whatever you have linked to that location).","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"Instead, you might want to use the convert_doc method below and run the code in Jupyter.","category":"page"},{"location":"notebooks/#Converting-between-formats","page":"Working with Jupyter notebooks","title":"Converting between formats","text":"","category":"section"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"You can convert between all supported input formats using the convert_doc function.","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"To convert from script to notebook:","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc(\"examples/FIR_design.jl\", \"FIR_design.ipynb\")","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"and from notebook to Markdown use:","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc(\"FIR_design.ipynb\", \"FIR_design.jmd\")","category":"page"},{"location":"notebooks/","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc","category":"page"},{"location":"notebooks/#Weave.convert_doc","page":"Working with Jupyter notebooks","title":"Weave.convert_doc","text":"convert_doc(infile::AbstractString, outfile::AbstractString; outformat::Union{Nothing,AbstractString} = nothing)\n\nConvert Weave documents between different formats\n\ninfile: Path of the input document\noutfile: Path of the output document\noutformat = nothing: Output document format (optional). By default (i.e. given nothing) Weave will try to automatically detect it from the outfile's extension. You can also specify either of \"script\", \"markdown\", \"notebook\", or \"noweb\"\n\n\n\n\n\n","category":"function"},{"location":"function_index/#Function-index","page":"Function index","title":"Function index","text":"","category":"section"},{"location":"function_index/","page":"Function index","title":"Function index","text":"","category":"page"},{"location":"#Weave.jl-Scientific-Reports-Using-Julia","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"","category":"section"},{"location":"","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"This is the documentation of Weave.jl. Weave is a scientific report generator/literate programming tool for Julia. It resembles Pweave, knitr, R Markdown, and Sweave.","category":"page"},{"location":"","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Current features","category":"page"},{"location":"","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Publish markdown directly to HTML and PDF using Julia or Pandoc\nExecute code as in terminal or in a unit of code chunk\nCapture Plots.jl or Gadfly.jl figures\nSupports various input format: Markdown, Noweb, Jupyter Notebook, and ordinal Julia script\nConversions between those input formats\nSupports various output document formats: HTML, PDF, GitHub markdown, Jupyter Notebook, MultiMarkdown, Asciidoc and reStructuredText\nSimple caching of results","category":"page"},{"location":"","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"(Image: Weave in Juno demo)","category":"page"},{"location":"#Index","page":"Weave.jl - Scientific Reports Using Julia","title":"Index","text":"","category":"section"},{"location":"","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Pages = [\n    \"index.md\",\n    \"getting_started.md\",\n    \"usage.md\",\n    \"publish.md\",\n    \"chunk_options.md\",\n    \"header.md\",\n    \"notebooks.md\",\n    \"function_index.md\",\n]","category":"page"}]
}
