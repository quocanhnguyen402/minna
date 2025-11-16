# PowerShell Script to Clean HTML Files
# Removes unnecessary components and keeps only main content

param(
    [Parameter(Mandatory=$false)]
    [int]$StartLesson = 1,
    
    [Parameter(Mandatory=$false)]
    [int]$EndLesson = 1,
    
    [Parameter(Mandatory=$false)]
    [string]$InputDir = "."
)

function Clean-HtmlFile {
    param(
        [string]$HtmlFile,
        [string]$OutputFile
    )
    
    if (-not (Test-Path $HtmlFile)) {
        Write-Host "File not found: $HtmlFile" -ForegroundColor Yellow
        return
    }
    
    Write-Host "Cleaning: $HtmlFile"
    
    $content = Get-Content $HtmlFile -Raw -Encoding UTF8
    
    # Extract lesson number from filename
    if ($HtmlFile -match 'lesson(\d+)') {
        $lessonNum = $matches[1]
    }
    
    # Extract only the main content body using article tag
    if ($content -match '(?s)<article class="item-page"[^>]*>(.*?)</article>') {
        $mainContent = $matches[1]
    } else {
        Write-Host "Could not find main content in $HtmlFile" -ForegroundColor Yellow
        return
    }
    
    # Remove ads
    $mainContent = $mainContent -replace '(?s)<ins class="adsbygoogle".*?</ins>', ''
    $mainContent = $mainContent -replace '(?s)<script[^>]*adsbygoogle.*?</script>', ''
    
    # Remove style tags
    $mainContent = $mainContent -replace '(?s)<style[^>]*>.*?</style>', ''
    
    # Remove navigation buttons
    $mainContent = $mainContent -replace '(?s)<button class="button_minna.*?</button>', ''
    
    # Remove scripts
    $mainContent = $mainContent -replace '(?s)<script[^>]*>.*?</script>', ''
    
    # Remove comments
    $mainContent = $mainContent -replace '(?s)<!--.*?-->', ''
    
    # Remove empty paragraphs
    $mainContent = $mainContent -replace '<p>\s*</p>', ''
    
    # Save cleaned content directly without HTML wrapper
    $mainContent | Out-File -FilePath $OutputFile -Encoding UTF8
    
    $originalSize = (Get-Item $HtmlFile).Length
    $cleanedSize = (Get-Item $OutputFile).Length
    $reduction = [math]::Round((($originalSize - $cleanedSize) / $originalSize) * 100, 1)
    
    Write-Host "Saved: $OutputFile (Reduced by $reduction%)" -ForegroundColor Green
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "HTML Cleaner" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Cleaning lessons $StartLesson to $EndLesson`n"

for ($i = $StartLesson; $i -le $EndLesson; $i++) {
    $lessonFolder = Join-Path $InputDir $i
    
    if (-not (Test-Path $lessonFolder)) {
        Write-Host "Folder not found: $lessonFolder" -ForegroundColor Yellow
        continue
    }
    
    Write-Host "`nProcessing Lesson $i..." -ForegroundColor Cyan
    
    # Clean vocabulary file (overwrite original)
    $vocabFile = Join-Path $lessonFolder "lesson$i-vocabulary.html"
    if (Test-Path $vocabFile) {
        Clean-HtmlFile -HtmlFile $vocabFile -OutputFile $vocabFile
    }
    
    # Clean grammar file (overwrite original)
    $grammarFile = Join-Path $lessonFolder "lesson$i-grammar.html"
    if (Test-Path $grammarFile) {
        Clean-HtmlFile -HtmlFile $grammarFile -OutputFile $grammarFile
    }
    
    # Clean mondai file (overwrite original)
    $mondaiFile = Join-Path $lessonFolder "lesson$i-mondai.html"
    if (Test-Path $mondaiFile) {
        Clean-HtmlFile -HtmlFile $mondaiFile -OutputFile $mondaiFile
    }
    
    # Clean kanji file (overwrite original)
    $kanjiFile = Join-Path $lessonFolder "lesson$i-kanji.html"
    if (Test-Path $kanjiFile) {
        Clean-HtmlFile -HtmlFile $kanjiFile -OutputFile $kanjiFile
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Cleaning complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
