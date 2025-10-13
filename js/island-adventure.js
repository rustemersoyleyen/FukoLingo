// FukoLingo - Kelime Adası Macerası - Ana Oyun Motoru

const IslandAdventure = {
    currentIsland: null,
    currentUnit: null,
    progress: null,
    
    // Oyunu başlat
    init() {
        this.progress = IslandProgress.load();
    },
    
    // Ada listesini göster
    showIslands() {
        // Mod seçimini gizle
        document.getElementById('modeSelection').classList.add('hidden');
        
        const activityArea = document.getElementById('activityArea');
        activityArea.classList.remove('hidden');
        
        activityArea.innerHTML = `
            <div style="max-width: 1000px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 40px;">
                    <h1 style="color: var(--text-dark); margin-bottom: 15px;">
                        🗺️ Kelime Adası Macerası
                    </h1>
                    <p style="color: var(--text-light); font-size: 1.2rem;">
                        Adaları keşfet, kelimeleri öğren!
                    </p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-bottom: 40px;">
                    ${this.renderIslands()}
                </div>
                
                <div style="text-align: center;">
                    <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                        Ana Menüye Dön
                    </button>
                </div>
            </div>
        `;
    },
    
    // Adaları render et
    renderIslands() {
        return islandConfig.islands.map(island => {
            const unitData = vocabularyData.units.find(u => u.id === island.id);
            if (!unitData) return '';
            
            const status = IslandProgress.getIslandStatus(island.id);
            const isUnlocked = this.progress[island.id].unlocked;
            
            return `
                <div class="island-card ${!isUnlocked ? 'locked' : ''}" 
                     onclick="${isUnlocked ? `IslandAdventure.selectIsland(${island.id})` : ''}"
                     style="background: linear-gradient(135deg, ${island.color}, ${this.darkenColor(island.color)}); 
                            padding: 30px; 
                            border-radius: 20px; 
                            cursor: ${isUnlocked ? 'pointer' : 'not-allowed'}; 
                            transition: transform 0.3s, box-shadow 0.3s;
                            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                            position: relative;
                            overflow: hidden;
                            ${!isUnlocked ? 'opacity: 0.6; filter: grayscale(50%);' : ''}">
                    
                    ${!isUnlocked ? '<div style="position: absolute; top: 20px; right: 20px; font-size: 2rem;">🔒</div>' : ''}
                    ${status.completed ? '<div style="position: absolute; top: 20px; right: 20px; font-size: 2rem;">✅</div>' : ''}
                    
                    <div style="font-size: 4rem; text-align: center; margin-bottom: 15px;">
                        ${island.emoji}
                    </div>
                    
                    <h3 style="color: white; text-align: center; margin-bottom: 10px; font-size: 1.5rem;">
                        ${island.name}
                    </h3>
                    
                    <p style="color: rgba(255,255,255,0.9); text-align: center; margin-bottom: 20px;">
                        ${island.theme}
                    </p>
                    
                    <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px; backdrop-filter: blur(10px);">
                        <div style="display: flex; justify-content: space-between; color: white; margin-bottom: 10px;">
                            <span>İlerleme:</span>
                            <span><strong>${status.progress}%</strong></span>
                        </div>
                        <div style="background: rgba(255,255,255,0.3); height: 10px; border-radius: 5px; overflow: hidden;">
                            <div style="background: white; height: 100%; width: ${status.progress}%; transition: width 0.5s;"></div>
                        </div>
                        <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin-top: 10px; text-align: center;">
                            ${status.completedGates} / ${status.totalGates} Kapı
                        </p>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    // Rengi koyulaştır
    darkenColor(color) {
        const hex = color.replace('#', '');
        const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - 40);
        const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - 40);
        const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - 40);
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    },
    
    // Ada seç
    selectIsland(islandId) {
        this.currentIsland = islandConfig.islands.find(i => i.id === islandId);
        this.currentUnit = vocabularyData.units.find(u => u.id === islandId);
        
        if (!this.currentIsland || !this.currentUnit) {
            showCelebration('⚠️ Ada bulunamadı!', false);
            return;
        }
        
        this.showGates(this.currentIsland);
    },
    
    // Kapıları göster
    showGates(island) {
        // İlerlemeyi yeniden yükle
        this.progress = IslandProgress.load();
        
        const activityArea = document.getElementById('activityArea');
        const status = IslandProgress.getIslandStatus(island.id);
        
        activityArea.innerHTML = `
            <div style="max-width: 1000px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="font-size: 5rem; margin-bottom: 15px;">${island.emoji}</div>
                    <h1 style="color: var(--text-dark); margin-bottom: 10px;">
                        ${island.name}
                    </h1>
                    <p style="color: var(--text-light); font-size: 1.1rem; margin-bottom: 15px;">
                        ${island.theme}
                    </p>
                    
                    <div style="display: inline-block; background: ${island.color}; color: white; padding: 10px 25px; border-radius: 20px;">
                        <strong>${status.completedGates} / ${status.totalGates}</strong> Kapı Tamamlandı
                    </div>
                </div>
                
                <div style="display: grid; gap: 20px; margin-bottom: 40px;">
                    ${this.renderGates(island)}
                </div>
                
                <div style="text-align: center;">
                    <button class="btn btn-secondary" onclick="IslandAdventure.showIslands()">
                        ← Ada Haritasına Dön
                    </button>
                </div>
            </div>
        `;
    },
    
    // Kapıları render et
    renderGates(island) {
        return island.gates.map((gate, index) => {
            const gateProgress = this.progress[island.id].gates[gate.id];
            const isUnlocked = gateProgress.unlocked;
            const isCompleted = gateProgress.completed;
            
            return `
                <div class="gate-card ${!isUnlocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}"
                     onclick="${isUnlocked ? `IslandAdventure.startGate('${gate.id}')` : ''}"
                     style="background: ${isCompleted ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #6366f1, #4f46e5)'};
                            padding: 25px;
                            border-radius: 15px;
                            display: flex;
                            align-items: center;
                            gap: 20px;
                            cursor: ${isUnlocked ? 'pointer' : 'not-allowed'};
                            transition: transform 0.2s, box-shadow 0.2s;
                            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                            position: relative;
                            ${!isUnlocked ? 'opacity: 0.6; filter: grayscale(50%);' : ''}"
                     onmouseover="${isUnlocked ? 'this.style.transform=\'translateY(-5px)\'; this.style.boxShadow=\'0 8px 25px rgba(0,0,0,0.2)\'' : ''}"
                     onmouseout="${isUnlocked ? 'this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 15px rgba(0,0,0,0.1)\'' : ''}">
                    
                    <div style="font-size: 4rem;">${gate.emoji}</div>
                    
                    <div style="flex: 1;">
                        <h3 style="color: white; margin-bottom: 8px; font-size: 1.4rem;">
                            ${gate.name}
                            ${!isUnlocked ? ' 🔒' : ''}
                            ${isCompleted ? ' ✅' : ''}
                        </h3>
                        <p style="color: rgba(255,255,255,0.9); margin-bottom: 10px;">
                            ${gate.description}
                        </p>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <span style="background: rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem; color: white;">
                                ${gameTypes[gate.gameType].icon} ${gameTypes[gate.gameType].name}
                            </span>
                            <span style="background: rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem; color: white;">
                                ${gate.words.length} Kelime
                            </span>
                            ${gateProgress.bestScore > 0 ? `
                                <span style="background: rgba(255,255,255,0.3); padding: 5px 12px; border-radius: 15px; font-size: 0.85rem; color: white;">
                                    ⭐ En İyi: ${gateProgress.bestScore}
                                </span>
                            ` : ''}
                        </div>
                    </div>
                    
                    ${isUnlocked && !isCompleted ? `
                        <div style="color: white; font-size: 2rem;">▶️</div>
                    ` : ''}
                </div>
            `;
        }).join('');
    },
    
    // Kapıyı başlat
    startGate(gateId) {
        const gate = this.currentIsland.gates.find(g => g.id === gateId);
        if (!gate) {
            showCelebration('⚠️ Kapı bulunamadı!', false);
            return;
        }
        
        const gateProgress = this.progress[this.currentIsland.id].gates[gateId];
        if (!gateProgress.unlocked) {
            showCelebration('🔒 Bu kapı henüz kilitli!', false);
            return;
        }
        
        // Oyunu başlat
        IslandGames.startGame(gate, this.currentUnit.words);
    },
    
    // Kapılara geri dön
    backToGates() {
        if (this.currentIsland) {
            this.showGates(this.currentIsland);
        } else {
            this.showIslands();
        }
    }
};

// Sayfa yüklendiğinde oyunu başlat
document.addEventListener('DOMContentLoaded', () => {
    IslandAdventure.init();
});

