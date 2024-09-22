import { create } from 'zustand'
import { FruitType } from '../types/fruit'

interface FruitJarItem extends FruitType {
  quantity: number
}

interface FruitStore {
  fruitJar: FruitJarItem[]
  addFruit: (fruit: FruitType) => void
  removeFruit: (fruitId: number) => void
  clearJar: () => void
}

export const useFruitStore = create<FruitStore>((set) => ({
  fruitJar: [],
  addFruit: (fruit) =>
    set((state) => {
      const existingFruit = state.fruitJar.find((item) => item.id === fruit.id)
      if (existingFruit) {
        return {
          fruitJar: state.fruitJar.map((item) =>
            item.id === fruit.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      } else {
        return {
          fruitJar: [...state.fruitJar, { ...fruit, quantity: 1 }],
        }
      }
    }),
  removeFruit: (fruitId) =>
    set((state) => {
      const fruitToUpdate = state.fruitJar.find((item) => item.id === fruitId)
      if (fruitToUpdate && fruitToUpdate.quantity > 1) {
        return {
          fruitJar: state.fruitJar.map((item) =>
            item.id === fruitId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
      } else {
        return {
          fruitJar: state.fruitJar.filter((item) => item.id !== fruitId),
        }
      }
    }),
  clearJar: () => set({ fruitJar: [] }),
}))