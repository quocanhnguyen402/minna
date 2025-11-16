# Script to download web pages with JavaScript rendering
# This uses Internet Explorer COM object (legacy but available on Windows)

param(
    [int]$StartLesson = 1,
    [int]$EndLesson = 1,
    [string]$OutputDir = "."
)

# Function to download a page with JavaScript rendering
function Get-RenderedPage {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    
    try {
        # Create Internet Explorer COM object
        $ie = New-Object -ComObject InternetExplorer.Application
        $ie.Visible = $false
        $ie.Silent = $true
        
        Write-Host "Downloading: $Url"
        $ie.Navigate($Url)
        
        # Wait for page to load
        while ($ie.Busy -or $ie.ReadyState -ne 4) {
            Start-Sleep -Milliseconds 500
        }
        
        # Additional wait for JavaScript to execute
        Start-Sleep -Seconds 3
        
        # Get the rendered HTML
        $html = $ie.Document.documentElement.outerHTML
        
        # Save to file
        $html | Out-File -FilePath $OutputPath -Encoding UTF8
        
        Write-Host "Saved: $OutputPath"
        
        # Clean up
        $ie.Quit()
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($ie) | Out-Null
        
        return $true
    }
    catch {
        Write-Host "Error downloading $Url : $_" -ForegroundColor Red
        if ($ie) {
            try { $ie.Quit() } catch {}
        }
        return $false
    }
}

# Main script
Write-Host "Starting download of lessons $StartLesson to $EndLesson" -ForegroundColor Green

for ($i = $StartLesson; $i -le $EndLesson; $i++) {
    Write-Host "`nProcessing Lesson $i..." -ForegroundColor Yellow
    
    # Create directory if it doesn't exist
    $lessonDir = Join-Path $OutputDir $i.ToString()
    if (-not (Test-Path $lessonDir)) {
        New-Item -ItemType Directory -Path $lessonDir -Force | Out-Null
    }
    
    # Download Grammar
    $grammarUrl = "https://www.vnjpclub.com/minna-no-nihongo/bai-$i-ngu-phap.html"
    $grammarPath = Join-Path $lessonDir "lesson$i-grammar.html"
    Get-RenderedPage -Url $grammarUrl -OutputPath $grammarPath
    
    # Download Vocabulary
    $vocabUrl = "https://www.vnjpclub.com/minna-no-nihongo/bai-$i-tu-vung.html"
    $vocabPath = Join-Path $lessonDir "lesson$i-vocabulary.html"
    Get-RenderedPage -Url $vocabUrl -OutputPath $vocabPath
    
    # Download Kanji
    $kanjiUrl = "https://www.vnjpclub.com/minna-no-nihongo/luyen-chu-han-bai-$i.html"
    $kanjiPath = Join-Path $lessonDir "lesson$i-kanji.html"
    Get-RenderedPage -Url $kanjiUrl -OutputPath $kanjiPath
    
    # Download Mondai (Exercises)
    $mondaiUrl = "https://www.vnjpclub.com/minna-no-nihongo/bai-$i-bai-tap.html"
    $mondaiPath = Join-Path $lessonDir "lesson$i-mondai.html"
    Get-RenderedPage -Url $mondaiUrl -OutputPath $mondaiPath
    
    # Small delay between lessons
    Start-Sleep -Seconds 2
}

Write-Host "`nDownload complete!" -ForegroundColor Green
